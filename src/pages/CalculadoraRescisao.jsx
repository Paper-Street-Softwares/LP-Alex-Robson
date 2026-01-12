import React, { useState, useEffect, useRef } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import content, { infos } from '../content/content'
import Button from '../components/interactives/Button'
import { Mail } from 'lucide-react'

export default function CalculadoraRescisao() {
  // ---------- Estados do formulário ----------
  const [tipoDesligamento, setTipoDesligamento] = useState('sem-justa-causa')
  const [salarioBase, setSalarioBase] = useState('1518,00')
  const [dataAdmissao, setDataAdmissao] = useState('2024-01-15')
  const [dataDesligamento, setDataDesligamento] = useState('2024-08-28')
  const [avisoModelo, setAvisoModelo] = useState('indenizado')
  const [faltasDescontos, setFaltasDescontos] = useState('0,00')
  const [feriasVencidas, setFeriasVencidas] = useState(false)
  const [fgtsOption, setFgtsOption] = useState('informar')
  const [fgtsSaldo, setFgtsSaldo] = useState('0000,00')

  // ---------- UI states ----------
  const [resultado, setResultado] = useState(null)
  const [comparacao, setComparacao] = useState(null)
  const [showMessageBox, setShowMessageBox] = useState(false)
  const [messageTitle, setMessageTitle] = useState('')
  const [messageText, setMessageText] = useState('')

  // Refs
  const resultRef = useRef(null)

  // ---------- Constantes / Tabelas ----------
  const inssTeto = 7786.02

  const regrasRescisao = {
    'sem-justa-causa': {
      multaFgts: 0.4,
      avisoPrevio: true,
      fgtsSaque: true,
      seguroDesemprego: true,
      avisoDesconta: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: true,
    },
    'pedido-demissao': {
      multaFgts: 0.0,
      avisoPrevio: true,
      fgtsSaque: false,
      seguroDesemprego: false,
      avisoDesconta: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: true,
    },
    'justa-causa': {
      multaFgts: 0.0,
      avisoPrevio: false,
      fgtsSaque: false,
      seguroDesemprego: false,
      avisoDesconta: false,
      decimoTerceiro: false,
      feriasProporcionais: false,
      feriasVencidas: true,
    },
    acordo: {
      multaFgts: 0.2,
      avisoPrevio: true,
      aviso50p: true,
      fgtsSaque: true,
      seguroDesemprego: false,
      avisoDesconta: false,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: true,
    },
    'rescisao-indireta': {
      multaFgts: 0.4,
      avisoPrevio: true,
      fgtsSaque: true,
      seguroDesemprego: true,
      avisoDesconta: false,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: true,
    },
    'termino-experiencia': {
      multaFgts: 0.0,
      avisoPrevio: false,
      fgtsSaque: true,
      seguroDesemprego: false,
      avisoDesconta: false,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: true,
    },
  }

  // ---------- Utilitários ----------
  const parseCurrency = (value) => {
    if (!value) return 0
    return parseFloat(value.toString().replace(/\./g, '').replace(',', '.'))
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(value || 0))

  // ---------- Funções de cálculo (mantidas conforme HTML original) ----------
  function getMonthsWorked(admissao, desligamento) {
    const d1 = new Date(admissao)
    const d2 = new Date(desligamento)
    let months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth()
    months += d2.getMonth()
    if (d2.getDate() < d1.getDate()) months--
    return months <= 0 ? 0 : months
  }

  function getAnosCompletos(admissao, desligamento) {
    const start = new Date(admissao)
    const end = new Date(desligamento)
    let years = end.getFullYear() - start.getFullYear()
    if (
      end.getMonth() < start.getMonth() ||
      (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
    ) {
      years--
    }
    return Math.max(0, years)
  }

  function getDiasAviso(dataAdmissao, dataDesligamento) {
    const anosCompletos = getAnosCompletos(dataAdmissao, dataDesligamento)
    return 30 + Math.min(60, anosCompletos * 3) // 30 + 3 dias por ano, até 90
  }

  function calcSalarioSaldo(salario, dataDesligamento) {
    const diasNoMes = 30
    const diasTrabalhados = new Date(dataDesligamento).getDate()
    return (salario / diasNoMes) * diasTrabalhados
  }

  function calcAvisoPrevio(salarioBaseNum, diasAviso) {
    return (salarioBaseNum / 30) * diasAviso
  }

  function calcDecimoTerceiro(salarioBaseNum, dataAdmissaoStr, dataFinalStr) {
    const anoDesligamento = new Date(dataFinalStr).getFullYear()
    const diaDesligamento = new Date(dataFinalStr).getDate()
    const mesDesligamento = new Date(dataFinalStr).getMonth() // 0..11

    let dataInicioContagem =
      new Date(dataAdmissaoStr).getFullYear() < anoDesligamento
        ? new Date(anoDesligamento, 0, 1)
        : new Date(dataAdmissaoStr)

    const diaInicio = dataInicioContagem.getDate()
    const mesInicio = dataInicioContagem.getMonth()
    let avos = 0
    for (let m = mesInicio; m <= mesDesligamento; m++) {
      if (m === mesInicio && diaInicio > 15) continue
      if (m === mesDesligamento && diaDesligamento < 15) continue
      avos++
    }
    avos = Math.max(0, avos)
    avos = Math.min(avos, 12)
    return (salarioBaseNum / 12) * avos
  }

  function calcFeriasProporcionais(
    salarioBaseNum,
    dataAdmissaoStr,
    dataFinalStr
  ) {
    let ultimoAniversario = new Date(dataAdmissaoStr)
    const dataFinal = new Date(dataFinalStr)
    while (ultimoAniversario <= dataFinal) {
      const proximo = new Date(ultimoAniversario)
      proximo.setFullYear(proximo.getFullYear() + 1)
      if (proximo > dataFinal) break
      ultimoAniversario = proximo
    }
    const dataInicioContagem = ultimoAniversario
    let mesesTotais =
      (dataFinal.getFullYear() - dataInicioContagem.getFullYear()) * 12 +
      (dataFinal.getMonth() - dataInicioContagem.getMonth())
    if (dataInicioContagem.getDate() > 15) mesesTotais--
    if (dataFinal.getDate() >= 15) mesesTotais++
    const avos = mesesTotais % 12
    return (salarioBaseNum / 12) * avos * (4 / 3)
  }

  function calcFeriasVencidas(salarioBaseNum) {
    return salarioBaseNum * (4 / 3)
  }

  function calcFgtsSaldo(option, saldoInformadoNum, fgtsMeses, salarioBaseNum) {
    if (option === 'informar') return saldoInformadoNum
    return salarioBaseNum * 0.08 * fgtsMeses
  }

  function calcMultaFgts(fgtsSaldoNum, aliquota) {
    return fgtsSaldoNum * aliquota
  }

  function calcINSS(base) {
    const baseINSS = Math.min(base, inssTeto)
    let inssValor = 0
    if (baseINSS <= 1412.0) {
      inssValor = baseINSS * 0.075
    } else if (baseINSS <= 2666.68) {
      inssValor = baseINSS * 0.09 - 21.18
    } else if (baseINSS <= 4000.03) {
      inssValor = baseINSS * 0.12 - 101.18
    } else if (baseINSS <= 7786.02) {
      inssValor = baseINSS * 0.14 - 181.18
    } else {
      inssValor = 7786.02 * 0.14 - 181.18
    }
    return Math.max(0, inssValor)
  }

  function calcIRRF(base) {
    let irrfValor = 0
    if (base <= 2259.2) {
      irrfValor = 0
    } else if (base <= 2826.65) {
      irrfValor = base * 0.075 - 169.44
    } else if (base <= 3751.05) {
      irrfValor = base * 0.15 - 381.44
    } else if (base <= 4664.68) {
      irrfValor = base * 0.225 - 662.77
    } else {
      irrfValor = base * 0.275 - 896.0
    }
    return Math.max(0, irrfValor)
  }

  // ---------- Máscara de moeda para inputs (mantendo comportamento original) ----------
  // Note: usamos eventos onChange em inputs e formatamos ao desfocar (onBlur)
  const maskToCurrencyString = (digitsOnlyString) => {
    if (!digitsOnlyString) return '0,00'
    const num = Number(digitsOnlyString)
    const cents = (num / 100).toFixed(2).replace('.', ',')
    // adiciona separador de milhar
    const parts = cents.split(',')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return parts.join(',')
  }

  // Helper para tratar mudança em campos de moeda a partir do valor "visual"
  const handleCurrencyInput = (setter) => (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '')
    setter(maskToCurrencyString(onlyDigits))
  }

  // ---------- Função principal de cálculo (preserva lógica do HTML) ----------
  function calcRescisaoFromForm({
    tipo,
    salarioStr,
    admissaoStr,
    desligamentoStr,
    aviso,
    faltasStr,
    feriasVenc,
    fgtsOpt,
    fgtsSaldoStr,
  }) {
    const salarioNum = parseCurrency(salarioStr)
    const faltasNum = parseCurrency(faltasStr)
    const fgtsSaldoNum = parseCurrency(fgtsSaldoStr)

    const admissao = new Date(`${admissaoStr}T00:00:00`)
    const desligamento = new Date(`${desligamentoStr}T00:00:00`)

    const regras = regrasRescisao[tipo]

    let bruto = 0
    let descontos = 0
    const verbas = {}
    const notas = []

    // Saldo de salário
    const saldoSalario = calcSalarioSaldo(salarioNum, desligamento)
    const diasTrabalhados = desligamento.getDate()
    verbas['Saldo de Salário'] = {
      valor: saldoSalario,
      formula: `${diasTrabalhados} dias trabalhados no mês`,
    }
    bruto += saldoSalario

    // Aviso Prévio
    const diasAviso = getDiasAviso(admissao, desligamento)
    const avisoValorProporcional = calcAvisoPrevio(salarioNum, diasAviso)
    const avisoValor30Dias = calcAvisoPrevio(salarioNum, 30)

    if (regras.avisoPrevio) {
      if (aviso === 'indenizado') {
        if (regras.aviso50p) {
          verbas['Aviso Prévio Indenizado (50%)'] = {
            valor: avisoValorProporcional / 2,
            formula: '50% do valor do aviso (Acordo)',
          }
          bruto += avisoValorProporcional / 2
        } else {
          verbas['Aviso Prévio Indenizado'] = {
            valor: avisoValorProporcional,
            formula: `${diasAviso} dias de aviso prévio`,
          }
          bruto += avisoValorProporcional
        }
      } else if (aviso === 'trabalhado') {
        verbas['Aviso Prévio Trabalhado'] = {
          valor: 0,
          formula: 'Aviso cumprido e pago no saldo final',
        }
      } else if (aviso === 'nao-cumprido' && regras.avisoDesconta) {
        verbas['Aviso Prévio (Desconto)'] = {
          valor: -avisoValor30Dias,
          formula: 'Desconto de 30 dias (Aviso não cumprido)',
        }
        descontos += avisoValor30Dias
      }
    }

    // 13º Salário
    if (regras.decimoTerceiro) {
      const decimoProporcional = calcDecimoTerceiro(
        salarioNum,
        admissaoStr,
        desligamentoStr
      )
      verbas['13º Salário Proporcional'] = {
        valor: decimoProporcional,
        formula: 'Proporcional aos meses trabalhados no ano',
      }
      bruto += decimoProporcional
    }

    // Férias vencidas
    if (feriasVenc && regras.feriasVencidas) {
      const feriasV = calcFeriasVencidas(salarioNum)
      verbas['Férias Vencidas + 1/3'] = {
        valor: feriasV,
        formula: 'Período completo de 12 meses não gozado',
      }
      bruto += feriasV
    }

    // Férias proporcionais
    if (regras.feriasProporcionais) {
      const feriasP = calcFeriasProporcionais(
        salarioNum,
        admissaoStr,
        desligamentoStr
      )
      verbas['Férias Proporcionais + 1/3'] = {
        valor: feriasP,
        formula: 'Proporcional ao período aquisitivo',
      }
      bruto += feriasP
    }

    // FGTS / Multa
    const dataFinalProjetada = new Date(desligamento)
    if (
      regras.avisoPrevio &&
      (aviso === 'indenizado' || aviso === 'trabalhado')
    )
      dataFinalProjetada.setDate(
        dataFinalProjetada.getDate() + getDiasAviso(admissao, desligamento)
      )

    const mesesTrabalhadosTotal =
      getMonthsWorked(admissao, dataFinalProjetada) + 1
    const fgtsCalculado = calcFgtsSaldo(
      fgtsOpt,
      fgtsSaldoNum,
      mesesTrabalhadosTotal,
      salarioNum
    )
    verbas['FGTS (Saldo Estimado/Informado)'] = {
      valor: fgtsCalculado,
      formula: 'Valor base para cálculo da multa',
    }

    if (regras.multaFgts > 0) {
      const multa = calcMultaFgts(fgtsCalculado, regras.multaFgts)
      verbas['Multa FGTS'] = {
        valor: multa,
        formula: `${regras.multaFgts * 100}% do saldo total do FGTS.`,
      }
      bruto += multa
    }

    // Descontos INSS sobre saldo e 13º
    const baseINSS = saldoSalario
    const inssValor = calcINSS(baseINSS)

    // INSS sobre 13º proporcional é calculado no HTML como separação; para manter compatibilidade:
    let baseINSS13 = 0
    if (regras.decimoTerceiro) {
      baseINSS13 = calcDecimoTerceiro(
        salarioNum,
        admissao.toISOString().slice(0, 10),
        desligamento.toISOString().slice(0, 10)
      )
    }
    const inssValor13 = calcINSS(baseINSS13)
    const inssTotal = inssValor + inssValor13
    if (inssTotal > 0) {
      verbas['INSS (sobre Saldo e 13º)'] = {
        valor: -inssTotal,
        formula: 'Desconto sobre verbas salariais',
      }
      descontos += inssTotal
    }

    // IRRF (simplificado)
    const baseIRRF = bruto - inssTotal - (verbas['Multa FGTS']?.valor || 0)
    const irrfValor = calcIRRF(baseIRRF)
    if (irrfValor > 0) {
      verbas['IRRF (Estimativa)'] = {
        valor: -irrfValor,
        formula: 'Desconto sobre a base de cálculo (Bruto - INSS)',
      }
      descontos += irrfValor
    }

    if (faltasNum > 0) {
      verbas['Outros Descontos'] = {
        valor: -faltasNum,
        formula: 'Faltas e outros adiantamentos informados.',
      }
      descontos += faltasNum
    }

    const liquido = bruto - descontos

    return {
      bruto,
      descontos,
      liquido,
      verbas,
      elegibilidade: {
        fgtsSaque: regras.fgtsSaque,
        seguroDesemprego: regras.seguroDesemprego,
        avisoPrazo: 'Em até 10 dias corridos contados do término do contrato.',
      },
      notas,
    }
  }

  // ---------- Ações (Calcular, Comparar, Limpar, Exportar) ----------
  const handleCalcular = (e) => {
    if (e) e.preventDefault()
    const form = {
      tipo: tipoDesligamento,
      salarioStr: salarioBase,
      admissaoStr: dataAdmissao,
      desligamentoStr: dataDesligamento,
      aviso: avisoModelo,
      faltasStr: faltasDescontos,
      feriasVenc: feriasVencidas,
      fgtsOpt: fgtsOption,
      fgtsSaldoStr: fgtsSaldo,
    }
    const res = calcRescisaoFromForm(form)
    setResultado(res)
    setComparacao(null)
    // rolar para resultado
    setTimeout(
      () => resultRef.current?.scrollIntoView({ behavior: 'smooth' }),
      200
    )
  }

  const handleComparar = () => {
    const baseForm = {
      salarioStr: salarioBase,
      admissaoStr: dataAdmissao,
      desligamentoStr: dataDesligamento,
      faltasStr: faltasDescontos,
      feriasVenc: feriasVencidas,
      fgtsOpt: fgtsOption,
      fgtsSaldoStr: fgtsSaldo,
    }
    const cenarios = [
      'sem-justa-causa',
      'pedido-demissao',
      'justa-causa',
      'acordo',
    ]
    const results = cenarios.map((tipo) => {
      const aviso = tipo === 'pedido-demissao' ? 'nao-cumprido' : 'indenizado'
      return calcRescisaoFromForm({ tipo, aviso, ...baseForm })
    })
    setComparacao({ cenarios, results })
    setResultado(null)
    setTimeout(
      () =>
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        }),
      200
    )
    console.log('comparar ativo')
  }

  const handleLimpar = () => {
    setTipoDesligamento('sem-justa-causa')
    setSalarioBase('1518,00')
    setDataAdmissao('2024-01-15')
    setDataDesligamento('2024-08-28')
    setAvisoModelo('indenizado')
    setFaltasDescontos('0,00')
    setFeriasVencidas(false)
    setFgtsOption('informar')
    setFgtsSaldo('0000,00')
    setResultado(null)
    setComparacao(null)
    console.log('Limpar Ativo')
  }

  const exportToPDF = () => {
    if (!resultado) {
      setMessageTitle('Nenhum resultado')
      setMessageText('Calcule a rescisão antes de exportar o PDF.')
      setShowMessageBox(true)
      return
    }
    const element = resultRef.current
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`estimativa_rescisao_${infos.name}.pdf`)
    })
  }

  // Atualiza avisoModelo e visibilidade FGTS conforme tipo / opção (mantém comportamento do HTML)
  useEffect(() => {
    if (tipoDesligamento === 'pedido-demissao') {
      setAvisoModelo('nao-cumprido')
    } else if (
      tipoDesligamento === 'sem-justa-causa' ||
      tipoDesligamento === 'rescisao-indireta' ||
      tipoDesligamento === 'acordo'
    ) {
      setAvisoModelo('indenizado')
    } else if (
      tipoDesligamento === 'justa-causa' ||
      tipoDesligamento === 'termino-experiencia'
    ) {
      // nesses casos aviso não se aplica — manter valor mas UI esconderá
      setAvisoModelo('trabalhado')
    }
  }, [tipoDesligamento])

  // ---------- Renderização ----------
  return (
    <div
      className="flex justify-center items-start min-h-screen p-4"
      style={{
        backgroundColor: '#f9f9f9',
        backgroundImage:
          'linear-gradient(#eaeaea 1px, transparent 1px), linear-gradient(to right, #eaeaea 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="w-full max-w-[900px] flex flex-col gap-6">
        {/* Formulário principal */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <form className="flex flex-col gap-4">
            {/* Header */}
            <header className="text-center">
              <img
                src={content.texts.navbar.logo.img}
                alt={`Logo ${infos.name}`}
                className="mx-auto mb-4 w-[200px]"
              />
              <h1
                className="text-3xl font-extrabold font-mainFont"
                style={{
                  color: '#c6af72',
                  fontFamily: 'Merriweather, serif',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
                }}
              >
                Calculadora de Rescisão
              </h1>
              <p className="text-gray-600 text-sm font-secondFont">
                Uma ferramenta de estimativa por Dr. Alex Reis
              </p>
            </header>
            <h2
              className="text-xl font-semibold mt-4"
              style={{
                fontFamily: 'Merriweather, serif',
                textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
              }}
            >
              Insira seus Dados Essenciais:
            </h2>
            <hr className="mt-[-10px]" />

            <div className="grid grid-cols-1 tablet2:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-600 font-semibold mb-2">
                  Tipo de Desligamento
                </label>
                <select
                  className="border-b outline-none p-2 border-b-black w-full"
                  value={tipoDesligamento}
                  onChange={(e) => setTipoDesligamento(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="sem-justa-causa">Sem Justa Causa</option>
                  <option value="pedido-demissao">Pedido de Demissão</option>
                  <option value="justa-causa">Justa Causa</option>
                  <option value="acordo">Acordo (Art. 484-A)</option>
                  <option value="rescisao-indireta">Rescisão Indireta</option>
                  <option value="termino-experiencia">
                    Término Contrato Experiência
                  </option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 font-semibold mb-2">
                  Salário Base Mensal (R$)
                </label>
                <input
                  type="text"
                  className="border-b outline-none p-2 border-b-black w-full"
                  value={salarioBase}
                  onChange={handleCurrencyInput(setSalarioBase)}
                  onBlur={() => {
                    if (!salarioBase) setSalarioBase('0,00')
                  }}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 font-semibold mb-2">
                  Data de Admissão
                </label>
                <input
                  type="date"
                  className="border-b outline-none p-2 border-b-black w-full "
                  value={dataAdmissao}
                  onChange={(e) => setDataAdmissao(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 font-semibold mb-2">
                  Data de Desligamento
                </label>
                <input
                  type="date"
                  className="border-b outline-none p-2 border-b-black w-full "
                  value={dataDesligamento}
                  onChange={(e) => setDataDesligamento(e.target.value)}
                />
              </div>

              {/* Aviso Prévio (visível conforme regras) */}
              {regrasRescisao[tipoDesligamento]?.avisoPrevio !== false ? (
                <div className="flex flex-col">
                  <label className="text-gray-600 font-semibold mb-2">
                    Aviso Prévio
                  </label>
                  <select
                    className="border-b outline-none p-2 border-b-black w-full"
                    value={avisoModelo}
                    onChange={(e) => setAvisoModelo(e.target.value)}
                  >
                    <option value="trabalhado">Trabalhado</option>
                    <option value="indenizado">Indenizado</option>
                    <option value="nao-cumprido">
                      Não Cumprido (Descontar)
                    </option>
                  </select>
                </div>
              ) : null}

              <div className="flex flex-col">
                <label className="text-gray-600 font-semibold mb-2">
                  Faltas/Descontos no Mês (R$)
                </label>
                <input
                  type="text"
                  className="border-b outline-none p-2 border-b-black w-full"
                  value={faltasDescontos}
                  onChange={handleCurrencyInput(setFaltasDescontos)}
                  onBlur={() => {
                    if (!faltasDescontos) setFaltasDescontos('0,00')
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 tablet2:grid-cols-2 gap-4">
              <div className="mt-2 flex flex-col w-full">
                <label className="text-gray-600 font-semibold">
                  Saldo do FGTS
                </label>
                <select
                  className="border-b outline-none p-2 border-b-black w-full mt-1"
                  value={fgtsOption}
                  onChange={(e) => setFgtsOption(e.target.value)}
                >
                  <option value="informar">Informar Saldo Total</option>
                  <option value="estimar">Estimar Saldo (Aproximado)</option>
                </select>
              </div>

              {fgtsOption === 'informar' ? (
                <div className=" flex flex-col mt-2 w-full">
                  <label className="text-gray-600 font-semibold">
                    Saldo Total de FGTS (R$)
                  </label>
                  <input
                    type="text"
                    className="border-b outline-none p-2 border-b-black w-full"
                    value={fgtsSaldo}
                    onChange={handleCurrencyInput(setFgtsSaldo)}
                    onBlur={() => {
                      if (!fgtsSaldo) setFgtsSaldo('0,00')
                    }}
                  />
                </div>
              ) : (
                <div className="mt-2 text-sm text-gray-500">
                  A estimativa será calculada com base no salário e no tempo de
                  serviço.
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-2">
                <input
                  id="feriasVencidas"
                  type="checkbox"
                  checked={feriasVencidas}
                  onChange={(e) => setFeriasVencidas(e.target.checked)}
                />
                <label htmlFor="feriasVencidas" className="text-gray-600">
                  Possui Férias vencidas?
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-[500px] mt-1">
              <label className="text-gray-600 font-semibold">Observações</label>
              <textarea
                className="border outline-none border-l-2 p-2 w-full"
                rows={3}
                placeholder="Insira aqui informações adicionais para o relatório..."
              ></textarea>
            </div>

            {/* Botões */}
            <div className="flex justify-center tablet1:justify-start flex-wrap gap-3 mt-4">
              <Button
                onClick={handleCalcular}
                label="Calcular"
                size="small"
                animation={false}
              />
              {/* <Button
                label="Comparar Cenários"
                size="small"
                onClick={handleComparar}
              /> */}
              <button
                type="button"
                onClick={handleComparar}
                className="rounded-[4px] px-[18px] py-[10px] text-paragraph3 font-secondFont bg-primary desktop1:hover:scale-110 desktop1:transition-all desktop1:duration-300"
              >
                Comparar Cenários
              </button>
              <button
                type="button"
                onClick={handleLimpar}
                className="rounded-[4px] px-[18px] py-[10px] text-paragraph3 font-secondFont bg-primary desktop1:hover:scale-110 desktop1:transition-all desktop1:duration-300"
              >
                Limpar Campos
              </button>
            </div>
          </form>
        </div>

        {/* Comparador de Cenários */}
        {comparacao ? (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: '#c6af72', fontFamily: 'Merriweather, serif' }}
            >
              Comparador de Cenários
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5', color: '#121212' }}>
                    <th className="py-2 px-3 text-left">Verba</th>
                    {comparacao.cenarios.map((c) => (
                      <th key={c} className="py-2 px-3 text-center">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr style={{ backgroundColor: '#f5f5f5', color: '#121212' }}>
                    <td className="py-2 px-3">Total Bruto</td>
                    {comparacao.results.map((r, i) => (
                      <td key={i} className="py-2 px-3 text-center">
                        {formatCurrency(r.bruto)}
                      </td>
                    ))}
                  </tr>
                  <tr style={{ backgroundColor: '#f5f5f5', color: '#121212' }}>
                    <td className="py-2 px-3">Total Descontos</td>
                    {comparacao.results.map((r, i) => (
                      <td key={i} className="py-2 px-3 text-center">
                        {formatCurrency(r.descontos)}
                      </td>
                    ))}
                  </tr>
                  <tr style={{ backgroundColor: '#f5f5f5', color: '#121212' }}>
                    <td className="py-2 px-3 font-semibold">
                      Líquido a Receber
                    </td>

                    {comparacao.results.map((r, i) => (
                      <td
                        key={i}
                        className="py-2 px-3 text-center font-semibold"
                      >
                        {formatCurrency(r.liquido)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {/* Resultado */}
        {resultado ? (
          <div
            ref={resultRef}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: '#c6af72', fontFamily: 'Merriweather, serif' }}
            >
              Resultado da Simulação
            </h2>

            <div
              className="p-4 rounded mb-4 border"
              style={{
                borderColor: resultado.liquido < 0 ? '#e57373' : '#6aa84f',
              }}
            >
              <p className="text-gray-600">Estimativa Líquida a Receber</p>
              <h3
                className="text-3xl font-bold"
                style={{
                  color: resultado.liquido < 0 ? '#e57373' : '#6aa84f',
                }}
              >
                {resultado.liquido < 0
                  ? `${formatCurrency(
                      Math.abs(resultado.liquido)
                    )} (Valor a Pagar)`
                  : formatCurrency(resultado.liquido)}
              </h3>
            </div>

            <p>
              Total Bruto: <strong>{formatCurrency(resultado.bruto)}</strong>
            </p>
            <p>
              Total de Descontos:{' '}
              <strong>{formatCurrency(resultado.descontos)}</strong>
            </p>

            <h3 className="mt-4 font-semibold">Memória de Cálculo:</h3>
            <p className="font-secondFont text-paragraph2 phone3:hidden">
              Deslize a tabela para o lado para visualizar todas as informações.
            </p>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-3 text-left">Verba</th>
                    <th className="py-2 px-3 text-left">Descrição</th>
                    <th className="py-2 px-3 text-left">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(resultado.verbas).map(([k, v], idx) => {
                    if (k.includes('FGTS (Saldo')) return null // manter compatibilidade com HTML original
                    return (
                      <tr key={idx}>
                        <td className="py-2 px-3">{k}</td>
                        <td className="py-2 px-3">
                          <small>{v.formula}</small>
                        </td>
                        <td className="py-2 px-3">{formatCurrency(v.valor)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h3>Avisos Importantes</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  <strong>Saque FGTS:</strong>{' '}
                  {resultado.elegibilidade.fgtsSaque
                    ? 'Elegível.'
                    : 'Não elegível (exceto casos específicos).'}
                </li>
                <li>
                  <strong>Seguro-Desemprego:</strong>{' '}
                  {resultado.elegibilidade.seguroDesemprego
                    ? 'Elegível (se preencher requisitos).'
                    : 'Não elegível para esta modalidade.'}
                </li>
                <li>
                  <strong>Prazo para Pagamento:</strong>{' '}
                  {resultado.elegibilidade.avisoPrazo}
                </li>
              </ul>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={exportToPDF}
                className="px-4 py-2 rounded border"
                style={{ borderColor: '#c6af72', color: '#c6af72' }}
              >
                Exportar PDF
              </button>
            </div>
          </div>
        ) : null}

        {/* Sobre o Advogado */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col gap-6 tablet2:gap-0 items-center text-center justify-between">
          <img
            src={content.texts.calc.img}
            alt={`Foto de ${infos.name}`}
            className="rounded-full w-32  mb-4 object-cover border-2"
            style={{ borderColor: '#c6af72' }}
          />
          <div className="flex flex-col tablet2:items-center m-auto tablet2:w-[55%] ">
            <h2
              className="text-xl font-semibold mb-0"
              style={{ color: '#c6af72', fontFamily: 'Merriweather, serif' }}
            >
              Sobre o Dr. Alex Reis
            </h2>
            <div className="mt-4 tablet2:text-center w-full text-paragraph3 text-center">
              <p>
                Comprometido em defender direitos com empatia, ética e dedicação
                real às pessoas.
              </p>

              <div className="flex flex-col justify-center items-center tablet1:flex-row gap-3 mt-4">
                <Button
                  conversao
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                    </svg>
                  }
                  label="Fale no WhatsApp"
                  size="small"
                />
                <Button
                  icon={<Mail width={20} />}
                  label="Envie um E-mail"
                  buttonLink="mailto:contato@arsadvocaciatrabalhista.com.br"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="text-center text-sm text-gray-600">
          Esta é uma ferramenta de estimativa. Os valores podem variar conforme
          convenções coletivas e outros fatores. Para um cálculo oficial,
          consulte um profissional.
        </footer>
      </div>

      {/* Caixa de Mensagem (Popup) */}
      {showMessageBox ? (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 border"
          style={{ borderColor: '#dddddd' }}
        >
          <h3 className="text-lg font-semibold" style={{ color: '#c6af72' }}>
            {messageTitle}
          </h3>
          <p className="mt-2 text-gray-600">{messageText}</p>
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowMessageBox(false)}
              className="px-4 py-2 rounded"
              style={{ backgroundColor: '#c6af72', color: '#121212' }}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
