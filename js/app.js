(() => {
  "use strict";

  const KEY = "sistema-contable-v1";
  const TUTORIAL_KEY = "sistema-contable-tutorial-v1";

  const ELEMENTOS = [
    { id: "activo", label: "Activo" },
    { id: "pasivo", label: "Pasivo" },
    { id: "patrimonio", label: "Patrimonio" },
    { id: "ingreso", label: "Ingreso" },
    { id: "gasto", label: "Gasto" },
  ];

  const NATURALEZAS = [
    { id: "deudora", label: "Deudora" },
    { id: "acreedora", label: "Acreedora" },
  ];

  const CATALOGO_BASE = [
    ["1101", "Caja", "activo", "deudora"],
    ["1102", "Caja Chica", "activo", "deudora"],
    ["1103", "Bancos", "activo", "deudora"],
    ["1104", "Fondo Fijo", "activo", "deudora"],
    ["1105", "Inventarios", "activo", "deudora"],
    ["1106", "Documentos por Cobrar a Corto Plazo", "activo", "deudora"],
    ["1107", "Cuentas por Cobrar Clientes", "activo", "deudora"],
    ["1108", "Cuentas por Cobrar Empleados", "activo", "deudora"],
    ["1109", "Inversiones Temporales", "activo", "deudora"],
    ["1110", "IVA Crédito Tributario", "activo", "deudora"],
    ["1111", "Retenciones en la Fuente por Cobrar", "activo", "deudora"],
    ["1112", "Anticipos Sueldos", "activo", "deudora"],
    ["1113", "Anticipos a Proveedores", "activo", "deudora"],
    ["1114", "Arriendos Prepagados", "activo", "deudora"],
    ["1115", "Otros Activos Corrientes", "activo", "deudora"],
    ["1201", "Propiedad, Planta y Equipo", "activo", "deudora"],
    ["120101", "Terrenos", "activo", "deudora"],
    ["120102", "Edificios", "activo", "deudora"],
    ["120103", "Equipos de Oficina", "activo", "deudora"],
    ["120104", "Equipos de Computación", "activo", "deudora"],
    ["120105", "Vehículos", "activo", "deudora"],
    ["120106", "Muebles y Enseres", "activo", "deudora"],
    ["120107", "Maquinaria y Equipos", "activo", "deudora"],
    ["1202", "Depreciación Acumulada", "activo", "acreedora"],
    ["1203", "Intangibles", "activo", "deudora"],
    ["120301", "Licencias", "activo", "deudora"],
    ["120302", "Software", "activo", "deudora"],
    ["120303", "Marcas y Patentes", "activo", "deudora"],
    ["1204", "Amortización Acumulada", "activo", "acreedora"],
    ["1205", "Inversiones a Largo Plazo", "activo", "deudora"],
    ["1206", "Otros Activos No Corrientes", "activo", "deudora"],
    ["2101", "Proveedores", "pasivo", "acreedora"],
    ["2102", "Documentos por Pagar a Corto Plazo", "pasivo", "acreedora"],
    ["2103", "Cuentas por Pagar", "pasivo", "acreedora"],
    ["2104", "Obligaciones con IESS", "pasivo", "acreedora"],
    ["2105", "Retenciones por Pagar", "pasivo", "acreedora"],
    ["210501", "Retención en la Fuente", "pasivo", "acreedora"],
    ["210502", "Retención IVA", "pasivo", "acreedora"],
    ["2106", "Sueldos y Salarios por Pagar", "pasivo", "acreedora"],
    ["2107", "IVA Débito Fiscal", "pasivo", "acreedora"],
    ["2108", "Préstamos Bancarios", "pasivo", "acreedora"],
    ["2109", "Préstamos Bancarios", "pasivo", "acreedora"],
    ["2110", "Provisiones", "pasivo", "acreedora"],
    ["2111", "Otros Pasivos Corrientes", "pasivo", "acreedora"],
    ["2201", "Préstamos Bancarios a Largo Plazo", "pasivo", "acreedora"],
    ["2202", "Documentos por Pagar a Largo Plazo", "pasivo", "acreedora"],
    ["2203", "Provisiones a Largo Plazo", "pasivo", "acreedora"],
    ["2204", "Otros Pasivos No Corrientes", "pasivo", "acreedora"],
    ["2205", "15% Participación Trabajadores por Pagar", "pasivo", "acreedora"],
    ["2206", "25% Impuesto a la Renta por Pagar", "pasivo", "acreedora"],
    ["3101", "Capital social", "patrimonio", "acreedora"],
    ["3102", "Aportes de Socios", "patrimonio", "acreedora"],
    ["3201", "Reservas", "patrimonio", "acreedora"],
    ["3202", "Resultados Acumulados", "patrimonio", "acreedora"],
    ["3203", "Utilidad del Ejercicio", "patrimonio", "acreedora"],
    ["3204", "Pérdida del Ejercicio", "patrimonio", "deudora"],
    ["4101", "Ventas", "ingreso", "acreedora"],
    ["4102", "Ingresos por Servicios", "ingreso", "acreedora"],
    ["4103", "Otros Ingresos", "ingreso", "acreedora"],
    ["4201", "Ingresos Financieros", "ingreso", "acreedora"],
    ["420101", "Intereses Ganados", "ingreso", "acreedora"],
    ["420102", "Rendimientos Bancarios", "ingreso", "acreedora"],
    ["4202", "Ingresos Diversos", "ingreso", "acreedora"],
    ["4203", "Otros Ingresos No Operacionales", "ingreso", "acreedora"],
    ["5101", "Sueldos y Salarios Administrativos", "gasto", "deudora"],
    ["5102", "Aportes Patronales", "gasto", "deudora"],
    ["5103", "Servicios Básicos", "gasto", "deudora"],
    ["5104", "Arrendamientos", "gasto", "deudora"],
    ["5105", "Papelería y Útiles de Oficina", "gasto", "deudora"],
    ["5106", "Depreciaciones", "gasto", "deudora"],
    ["5107", "Amortizaciones", "gasto", "deudora"],
    ["5108", "Honorarios Profesionales", "gasto", "deudora"],
    ["5109", "Servicios Notariales", "gasto", "deudora"],
    ["5110", "Servicios Generales", "gasto", "deudora"],
    ["5111", "Materiales de Limpieza", "gasto", "deudora"],
    ["5201", "Publicidad y Propaganda", "gasto", "deudora"],
    ["5202", "Comisiones en Ventas", "gasto", "deudora"],
    ["5203", "Gastos de Transporte", "gasto", "deudora"],
    ["5204", "Empaques y Embalajes", "gasto", "deudora"],
    ["5301", "Gastos Financieros", "gasto", "deudora"],
    ["5302", "Pérdidas en Venta de Activos", "gasto", "deudora"],
    ["5303", "Multas y Recargos", "gasto", "deudora"],
    ["5304", "Gastos Diversos", "gasto", "deudora"],
    ["5305", "Otros Gastos No Operacionales", "gasto", "deudora"],
  ];

  const STEPS = [
    { id: "catalogo", phase: "config", n: null, label: "Catálogo de Cuentas" },
    { id: "diario", phase: "1", n: 1, label: "Libro Diario" },
    { id: "mayor", phase: "1", n: 2, label: "Mayorización" },
    { id: "btc", phase: "1", n: 3, label: "Balance de Comprobación" },
    { id: "ajustes", phase: "2", n: 4, label: "Libro de Ajustes" },
    { id: "mayorAj", phase: "2", n: 5, label: "Mayor Ajustado" },
    { id: "btcAj", phase: "2", n: 6, label: "Balance de Comprobación Ajustado" },
    { id: "er", phase: "3", n: 7, label: "Estado de Resultados" },
    { id: "bg", phase: "3", n: 8, label: "Balance General" },
  ];

  /* ---------- utilidades ---------- */

  const uid = () =>
    crypto.randomUUID ? crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const money = (n) => Math.round((Number(n) || 0) * 100) / 100;

  const fmt = (n) =>
    money(n).toLocaleString("es-CL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const today = () => new Date().toISOString().slice(0, 10);

  const labelEl = (id) => ELEMENTOS.find((e) => e.id === id)?.label || id;
  const labelNat = (id) => NATURALEZAS.find((e) => e.id === id)?.label || id;

  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  /* ---------- persistencia ---------- */

  function seedCuentas() {
    return CATALOGO_BASE.map(([codigo, nombre, elemento, naturaleza]) => ({
      id: uid(),
      codigo,
      nombre,
      elemento,
      naturaleza,
    }));
  }

  function defaultState() {
    return {
      empresa: "Empresa Demo SpA",
      periodo: String(new Date().getFullYear()),
      sinAjustes: false,
      cuentas: seedCuentas(),
      asientos: [],
      view: "catalogo",
    };
  }

  function mergeCatalogo(cuentasGuardadas = []) {
    const guardadas = new Map(cuentasGuardadas.map((cuenta) => [cuenta.codigo, cuenta]));
    const catalogoPdf = CATALOGO_BASE.map(([codigo, nombre, elemento, naturaleza]) => {
      const cuenta = guardadas.get(codigo);
      return cuenta
        ? { ...cuenta, nombre, elemento, naturaleza }
        : { id: uid(), codigo, nombre, elemento, naturaleza };
    });
    const codigosPdf = new Set(CATALOGO_BASE.map(([codigo]) => codigo));
    const cuentasPersonalizadas = cuentasGuardadas.filter((cuenta) => !codigosPdf.has(cuenta.codigo));
    return [...catalogoPdf, ...cuentasPersonalizadas];
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return { ...defaultState(), ...parsed, cuentas: mergeCatalogo(parsed.cuentas || []) };
    } catch {
      return defaultState();
    }
  }

  function save() {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        empresa: state.empresa,
        periodo: state.periodo,
        sinAjustes: state.sinAjustes,
        cuentas: state.cuentas,
        asientos: state.asientos,
        view: state.view,
      })
    );
  }

  function cargarCasoPrueba() {
    const base = defaultState();
    const porCodigo = new Map(base.cuentas.map((cuenta) => [cuenta.codigo, cuenta.id]));
    const linea = (codigo, debe = 0, haber = 0) => ({
      cuentaId: porCodigo.get(codigo),
      debe,
      haber,
    });
    const asiento = (fecha, glosa, lineas, esAjuste = false) => ({
      id: uid(),
      fecha,
      glosa,
      esAjuste,
      lineas,
    });

    base.empresa = "Distribuidora Vallejo";
    base.periodo = "2026";
    base.asientos = [
      asiento("2026-05-03", "Se pagó por adelantado arriendo, gigantografía y transporte", [
        linea("1114", 3000),
        linea("5201", 350),
        linea("5203", 250),
        linea("1103", 0, 3600),
      ]),
      asiento("2026-05-06", "Adquisición de software y profesional en sistemas", [
        linea("120302", 1800),
        linea("5108", 400),
        linea("1103", 0, 1200),
        linea("2102", 0, 1000),
      ]),
      asiento("2026-05-08", "Venta de mercaderías", [
        linea("1101", 2200),
        linea("1106", 3000),
        linea("1107", 3500),
        linea("4101", 0, 8700),
      ]),
      asiento("2026-05-10", "Préstamo bancario a largo plazo", [
        linea("1103", 15200),
        linea("1101", 800),
        linea("2201", 0, 16000),
      ]),
      asiento("2026-05-12", "Compra de mercadería", [
        linea("1105", 6500),
        linea("1101", 0, 2500),
        linea("2101", 0, 4000),
      ]),
      asiento("2026-05-14", "Servicio técnico y compra de vehículo", [
        linea("1101", 1300),
        linea("120105", 2600),
        linea("4102", 0, 1300),
        linea("1103", 0, 1600),
        linea("2102", 0, 1000),
      ]),
      asiento("2026-05-15", "Depreciación del periodo", [linea("5106", 43.33), linea("1202", 0, 43.33)], true),
      asiento("2026-05-15", "Amortización del periodo", [linea("5107", 50), linea("1204", 0, 50)], true),
      asiento("2026-05-15", "Devengamiento de arrendamiento", [linea("5104", 500), linea("1114", 0, 500)], true),
    ];
    base.view = "bg";
    base.sinAjustes = false;
    state = base;
    save();
    render();
    toast("Caso de prueba cargado. Todas las fases están disponibles.");
  }

  let state = load();
  let toastTimer = null;

  /* ---------- dominio contable ---------- */

  const asientosNormales = () => state.asientos.filter((a) => !a.esAjuste);
  const asientosAjuste = () => state.asientos.filter((a) => a.esAjuste);

  function cuentaById(id) {
    return state.cuentas.find((c) => c.id === id);
  }

  function lineaValida(l) {
    const d = money(l.debe);
    const h = money(l.haber);
    if (!l.cuentaId) return false;
    if (d > 0 && h > 0) return false;
    if (d < 0 || h < 0) return false;
    return d > 0 || h > 0;
  }

  function totalesAsiento(lineas) {
    const debe = money(lineas.reduce((s, l) => s + money(l.debe), 0));
    const haber = money(lineas.reduce((s, l) => s + money(l.haber), 0));
    return { debe, haber, diff: money(debe - haber), cuadrado: debe === haber && debe > 0 };
  }

  function asientoCuadrado(asiento) {
    const lineasOk = (asiento.lineas || []).every(lineaValida);
    const t = totalesAsiento(asiento.lineas || []);
    return lineasOk && t.cuadrado && (asiento.glosa || "").trim() && asiento.fecha;
  }

  function movimientos(incluirAjustes) {
    const list = incluirAjustes ? state.asientos : asientosNormales();
    return [...list].sort((a, b) => String(a.fecha).localeCompare(b.fecha) || String(a.id).localeCompare(b.id));
  }

  function mayor(incluirAjustes) {
    const map = new Map();
    for (const a of movimientos(incluirAjustes)) {
      a.lineas.forEach((l, idx) => {
        const cta = cuentaById(l.cuentaId);
        if (!cta) return;
        if (!map.has(cta.id)) {
          map.set(cta.id, { cuenta: cta, lineas: [], debe: 0, haber: 0 });
        }
        const row = map.get(cta.id);
        const debe = money(l.debe);
        const haber = money(l.haber);
        row.debe = money(row.debe + debe);
        row.haber = money(row.haber + haber);
        const diffLine = money(row.debe - row.haber);
        const saldoNat = Math.abs(diffLine);
        row.lineas.push({
          fecha: a.fecha,
          glosa: a.glosa,
          esAjuste: !!a.esAjuste,
          debe,
          haber,
          saldo: saldoNat,
          asientoId: a.id,
          idx,
        });
      });
    }
    return [...map.values()].sort((a, b) => a.cuenta.codigo.localeCompare(b.cuenta.codigo));
  }

  function getSaldoInfo(debe, haber) {
    const d = money(debe);
    const h = money(haber);
    const diff = money(d - h);
    if (diff > 0) {
      return { lado: "Deudor", monto: diff, texto: `Saldo Deudor: ${fmt(diff)}` };
    } else if (diff < 0) {
      return { lado: "Acreedor", monto: money(-diff), texto: `Saldo Acreedor: ${fmt(-diff)}` };
    } else {
      return { lado: "Cero", monto: 0, texto: `Saldo: ${fmt(0)}` };
    }
  }

  function saldoCorridoFinal(cta, debe, haber) {
    return Math.abs(money(debe - haber));
  }

  function trialBalance(incluirAjustes) {
    const rows = mayor(incluirAjustes).map((m) => {
      const debe = m.debe;
      const haber = m.haber;
      const neto = money(debe - haber);
      const saldoDeudor = neto > 0 ? neto : 0;
      const saldoAcreedor = neto < 0 ? money(-neto) : 0;
      return { cuenta: m.cuenta, debe, haber, saldoDeudor, saldoAcreedor };
    });
    const sum = rows.reduce(
      (s, r) => ({
        debe: money(s.debe + r.debe),
        haber: money(s.haber + r.haber),
        saldoDeudor: money(s.saldoDeudor + r.saldoDeudor),
        saldoAcreedor: money(s.saldoAcreedor + r.saldoAcreedor),
      }),
      { debe: 0, haber: 0, saldoDeudor: 0, saldoAcreedor: 0 }
    );
    return {
      rows,
      sum,
      sumasOk: sum.debe === sum.haber,
      saldosOk: sum.saldoDeudor === sum.saldoAcreedor,
    };
  }

  function saldoElemento(cta, debe, haber) {
    const netoDebe = money(debe - haber);
    if (cta.naturaleza === "deudora") return netoDebe;
    return money(-netoDebe);
  }

  function estadoResultados() {
    const tb = trialBalance(true);
    const ingresos = [];
    const gastos = [];
    for (const r of tb.rows) {
      const saldo = saldoElemento(r.cuenta, r.debe, r.haber);
      if (r.cuenta.elemento === "ingreso" && saldo !== 0) ingresos.push({ ...r, saldo });
      if (r.cuenta.elemento === "gasto" && saldo !== 0) gastos.push({ ...r, saldo });
    }
    const totalIng = money(ingresos.reduce((s, x) => s + x.saldo, 0));
    const totalGas = money(gastos.reduce((s, x) => s + x.saldo, 0));
    const utilidad = money(totalIng - totalGas);
    const participacionTrabajadores = money(utilidad * 0.15);
    const baseImponible = money(utilidad - participacionTrabajadores);
    const impuestoRenta = money(baseImponible * 0.25);
    const utilidadNeta = money(baseImponible - impuestoRenta);
    return {
      ingresos,
      gastos,
      totalIng,
      totalGas,
      utilidad,
      participacionTrabajadores,
      baseImponible,
      impuestoRenta,
      utilidadNeta,
    };
  }

  function esPasivoNoCorriente(cuenta) {
    return cuenta.codigo.startsWith("22") || [
      "15% Participación Trabajadores por Pagar",
      "25% Impuesto a la Renta por Pagar",
    ].includes(cuenta.nombre);
  }

  function balanceGeneral() {
    const tb = trialBalance(true);
    const er = estadoResultados();
    const grupos = { activo: [], pasivoCorriente: [], pasivoNoCorriente: [], patrimonio: [] };
    for (const r of tb.rows) {
      const saldo = saldoElemento(r.cuenta, r.debe, r.haber);
      if (saldo === 0) continue;
      if (r.cuenta.elemento === "activo") {
        grupos.activo.push({ ...r, saldo: r.cuenta.naturaleza === "acreedora" ? money(-saldo) : saldo });
      }
      if (r.cuenta.elemento === "pasivo") {
        grupos[esPasivoNoCorriente(r.cuenta) ? "pasivoNoCorriente" : "pasivoCorriente"].push({ ...r, saldo });
      }
      if (r.cuenta.elemento === "patrimonio") grupos.patrimonio.push({ ...r, saldo });
    }
    const cuentaDeduccion = (codigo, nombre, saldo) => ({
      cuenta: { codigo, nombre },
      saldo,
    });
    if (er.participacionTrabajadores) {
      grupos.pasivoNoCorriente.push(
        cuentaDeduccion("2205", "15% Participación Trabajadores por Pagar", er.participacionTrabajadores)
      );
    }
    if (er.impuestoRenta) {
      grupos.pasivoNoCorriente.push(
        cuentaDeduccion("2206", "25% Impuesto a la Renta por Pagar", er.impuestoRenta)
      );
    }
    const tot = (arr) => money(arr.reduce((s, x) => s + x.saldo, 0));
    const activo = tot(grupos.activo);
    const pasivoCorriente = tot(grupos.pasivoCorriente);
    const pasivoNoCorriente = tot(grupos.pasivoNoCorriente);
    const pasivo = money(pasivoCorriente + pasivoNoCorriente);
    const patrimonioCtas = tot(grupos.patrimonio);
    const patrimonio = money(patrimonioCtas + er.utilidadNeta);
    const pasPat = money(pasivo + patrimonio);
    return {
      grupos,
      activo,
      pasivo,
      pasivoCorriente,
      pasivoNoCorriente,
      patrimonioCtas,
      utilidad: er.utilidadNeta,
      patrimonio,
      pasPat,
      cuadra: activo === pasPat,
      diferencia: money(activo - pasPat),
    };
  }

  function cuentaEnUso(id) {
    return state.asientos.some((a) => a.lineas.some((l) => l.cuentaId === id));
  }

  /* ---------- bloqueo de pasos ---------- */

  function btcFase1() {
    return trialBalance(false);
  }

  function unlockReason(id) {
    const hasCtas = state.cuentas.length > 0;
    const hasDiario = asientosNormales().length > 0;
    const btc = hasDiario ? btcFase1() : null;
    const fase1Ok = hasDiario && btc.sumasOk && btc.saldosOk;
    const fase2Ok = asientosAjuste().length > 0 || state.sinAjustes;

    if (id === "catalogo") return null;
    if (id === "diario") return hasCtas ? null : "Cargue al menos una cuenta en el catálogo.";
    if (id === "mayor" || id === "btc")
      return hasDiario ? null : "Registre al menos un asiento cuadrado en el Libro Diario.";
    if (id === "ajustes")
      return fase1Ok
        ? null
        : "Complete la Fase 1: Libro Diario y un Balance de Comprobación cuadrado.";
    if (id === "mayorAj" || id === "btcAj" || id === "er" || id === "bg") {
      if (!fase1Ok) return "Complete primero la Fase 1 (diario y balance cuadrado).";
      if (!fase2Ok)
        return "Registre asientos de ajuste o marque que el periodo no tiene ajustes.";
      return null;
    }
    return "Paso bloqueado.";
  }

  function isUnlocked(id) {
    return !unlockReason(id);
  }

  /* ---------- UI ---------- */

  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.add("hidden"), 3200);
  }

  function badgeCuadra(ok, okText, badText) {
    return ok
      ? `<span class="badge badge-ok">● ${esc(okText)}</span>`
      : `<span class="badge badge-bad">● ${esc(badText)}</span>`;
  }

  function navHtml() {
    const groups = [
      { key: "config", title: "Configuración" },
      { key: "1", title: "Fase 1 · Diario a Balances" },
      { key: "2", title: "Fase 2 · Ajustes de fin de periodo" },
      { key: "3", title: "Fase 3 · Estados financieros" },
    ];
    return groups
      .map((g) => {
        const items = STEPS.filter((s) => s.phase === g.key)
          .map((s) => {
            const locked = !isUnlocked(s.id);
            const active = state.view === s.id;
            const num = s.n ? `<span class="step-num">${s.n}</span>` : `<span class="step-num">●</span>`;
            return `<button class="nav-btn ${active ? "active" : ""}" data-nav="${s.id}" ${
              locked ? "disabled" : ""
            } title="${locked ? esc(unlockReason(s.id)) : ""}">${num}<span>${esc(s.label)}</span>${
              locked ? `<span class="ml-auto text-[10px] opacity-80">Bloqueado</span>` : ""
            }</button>`;
          })
          .join("");
        return `<div><div class="px-2 pb-1 text-[10px] uppercase tracking-[0.14em] text-indigo-200/70">${g.title}</div>${items}</div>`;
      })
      .join("");
  }

  function renderNav() {
    document.getElementById("nav").innerHTML = navHtml();
    document.querySelectorAll("[data-nav]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.nav;
        if (!isUnlocked(id)) {
          toast(unlockReason(id));
          return;
        }
        state.view = id;
        save();
        render();
      });
    });
  }

  function kpis(items) {
    return `<div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-5">${items
      .map(
        (k) =>
          `<div class="card kpi"><div class="lbl">${esc(k.lbl)}</div><div class="val ${k.cls || ""}">${k.val}</div>${
            k.sub ? `<div class="text-xs text-slate-500 mt-1">${k.sub}</div>` : ""
          }</div>`
      )
      .join("")}</div>`;
  }

  function pageHead(title, subtitle, extra = "") {
    return `<div class="flex flex-wrap items-start justify-between gap-3 mb-5">
      <div>
        <h2 class="text-xl font-semibold text-slate-800">${esc(title)}</h2>
        <p class="text-sm text-slate-500 mt-0.5">${subtitle}</p>
      </div>
      <div class="no-print">${extra}</div>
    </div>`;
  }

  /* ----- catálogo ----- */

  function viewCatalogo() {
    const rows = [...state.cuentas]
      .sort((a, b) => a.codigo.localeCompare(b.codigo))
      .map(
        (c) => `<tr data-catalogo-account data-search="${esc(`${c.codigo} ${c.nombre} ${labelEl(c.elemento)} ${labelNat(c.naturaleza)}`.toLowerCase())}">
          <td class="font-mono text-xs">${esc(c.codigo)}</td>
          <td>${esc(c.nombre)} <button type="button" class="account-help" data-account-help="${c.id}" title="Consultar esta cuenta" aria-label="Consultar ${esc(c.nombre)}">?</button></td>
          <td><span class="badge badge-info">${esc(labelEl(c.elemento))}</span></td>
          <td><span class="badge badge-gray">${esc(labelNat(c.naturaleza))}</span></td>
          <td class="no-print whitespace-nowrap">
            <button class="btn btn-ghost" data-edit="${c.id}">Editar</button>
            <button class="btn btn-danger" data-del="${c.id}">Eliminar</button>
          </td>
        </tr>`
      )
      .join("");

    return (
      pageHead(
        "Catálogo de Cuentas",
        "Plan de cuentas del ejercicio. Las cuentas usadas en asientos no se pueden eliminar."
      ) +
      `<div class="card p-4 mb-4">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h3 class="text-sm font-semibold">Nueva / editar cuenta</h3>
          <div class="flex flex-wrap items-center gap-2">
            <a href="PLAN%20DE%20CUENTAS%20ACTUALIZADO.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-ghost text-xs">📄 Ver PDF de Referencia</a>
            <button type="button" id="btnOpenImport" class="btn btn-ok text-xs">📥 Importar (Excel / TXT)</button>
            <button type="button" id="btnDownloadTemplate" class="btn btn-ghost text-xs">📄 Plantilla Ejemplo</button>
          </div>
        </div>
        <form id="formCuenta" class="grid md:grid-cols-5 gap-3 items-end">
          <input type="hidden" name="editId" />
          <div class="field"><label>Código</label><input name="codigo" class="input" required maxlength="12" /></div>
          <div class="field md:col-span-2"><label>Nombre</label><input name="nombre" class="input" required /></div>
          <div class="field"><label>Elemento</label>
            <select name="elemento" class="input">${ELEMENTOS.map(
              (e) => `<option value="${e.id}">${e.label}</option>`
            ).join("")}</select>
          </div>
          <div class="field"><label>Naturaleza</label>
            <select name="naturaleza" class="input">${NATURALEZAS.map(
              (e) => `<option value="${e.id}">${e.label}</option>`
            ).join("")}</select>
          </div>
          <div class="md:col-span-5 flex gap-2">
            <button class="btn btn-primary" type="submit">Guardar cuenta</button>
            <button type="button" id="cancelCuenta" class="btn btn-ghost">Limpiar</button>
          </div>
        </form>
      </div>
      <div class="card p-4 mb-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="text-sm font-semibold">Cuentas registradas (${state.cuentas.length})</h3>
          <div class="field w-full sm:w-72">
            <input id="catalogoSearch" class="input py-1 text-xs" placeholder="🔍 Buscar por código, nombre o tipo…" />
          </div>
        </div>
      </div>
      <div class="table-wrap card">
        <table class="data">
          <thead><tr><th>Código</th><th>Nombre</th><th>Elemento</th><th>Naturaleza</th><th class="no-print"></th></tr></thead>
          <tbody id="catalogoRows">${rows || `<tr><td colspan="5" class="text-slate-500">Sin cuentas</td></tr>`}</tbody>
        </table>
      </div>`
    );
  }

  function bindCatalogo() {
    const form = document.getElementById("formCuenta");
    const reset = () => {
      form.reset();
      form.editId.value = "";
    };
    document.getElementById("cancelCuenta").onclick = reset;
    document.getElementById("btnOpenImport").onclick = openImportModal;
    document.getElementById("btnDownloadTemplate").onclick = downloadTemplateCSV;

    const searchInput = document.getElementById("catalogoSearch");
    if (searchInput) {
      searchInput.oninput = () => {
        const q = searchInput.value.trim().toLowerCase();
        document.querySelectorAll("[data-catalogo-account]").forEach((row) => {
          row.hidden = q && !row.dataset.search.includes(q);
        });
      };
    }
    form.onsubmit = (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const codigo = data.codigo.trim();
      const nombre = data.nombre.trim();
      const dup = state.cuentas.find((c) => c.codigo === codigo && c.id !== data.editId);
      if (dup) return toast("El código ya existe.");
      if (data.editId) {
        const cta = state.cuentas.find((c) => c.id === data.editId);
        Object.assign(cta, { codigo, nombre, elemento: data.elemento, naturaleza: data.naturaleza });
        toast("Cuenta actualizada.");
      } else {
        state.cuentas.push({ id: uid(), codigo, nombre, elemento: data.elemento, naturaleza: data.naturaleza });
        toast("Cuenta agregada.");
      }
      save();
      render();
    };
    document.querySelectorAll("[data-edit]").forEach((b) => {
      b.onclick = () => {
        const c = cuentaById(b.dataset.edit);
        form.editId.value = c.id;
        form.codigo.value = c.codigo;
        form.nombre.value = c.nombre;
        form.elemento.value = c.elemento;
        form.naturaleza.value = c.naturaleza;
        form.codigo.focus();
      };
    });
    document.querySelectorAll("[data-account-help]").forEach((button) => {
      button.onclick = () => openAccountHelp(button.dataset.accountHelp);
    });
    document.querySelectorAll("[data-del]").forEach((b) => {
      b.onclick = () => {
        if (cuentaEnUso(b.dataset.del)) return toast("No se puede eliminar: la cuenta tiene movimientos.");
        if (!confirm("¿Eliminar esta cuenta?")) return;
        state.cuentas = state.cuentas.filter((c) => c.id !== b.dataset.del);
        save();
        render();
      };
    });
  }

  function downloadTemplateCSV() {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Codigo,Nombre,Elemento,Naturaleza\n" +
      "1101,Caja Chica,activo,deudora\n" +
      "1102,Bancos Locales,activo,deudora\n" +
      "2101,Cuentas por Pagar Proveedores,pasivo,acreedora\n" +
      "3101,Capital Social,patrimonio,acreedora\n" +
      "4101,Ventas de Mercaderia,ingreso,acreedora\n" +
      "5101,Gasto Sueldos y Salarios,gasto,deudora\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "plantilla_cuentas.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function downloadTemplateTXT() {
    const txtContent = "data:text/plain;charset=utf-8," + 
      "1101\tCaja Chica\tactivo\tdeudora\n" +
      "1102\tBancos Locales\tactivo\tdeudora\n" +
      "2101\tCuentas por Pagar Proveedores\tpasivo\tacreedora\n" +
      "3101\tCapital Social\tpatrimonio\tacreedora\n" +
      "4101\tVentas de Mercaderia\tingreso\tacreedora\n" +
      "5101\tGasto Sueldos y Salarios\tgasto\tdeudora\n";
    const encodedUri = encodeURI(txtContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "plantilla_cuentas.txt");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function inferElemento(codigo) {
    const clean = codigo.replace(/\D/g, "");
    const first = clean.charAt(0);
    switch (first) {
      case "1": return "activo";
      case "2": return "pasivo";
      case "3": return "patrimonio";
      case "4": return "ingreso";
      case "5":
      case "6": return "gasto";
      default: return "activo";
    }
  }

  function inferNaturaleza(elemento) {
    if (elemento === "pasivo" || elemento === "patrimonio" || elemento === "ingreso") {
      return "acreedora";
    }
    return "deudora";
  }

  function parseElementoStr(str) {
    if (!str) return null;
    const s = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (s.includes("act")) return "activo";
    if (s.includes("pas")) return "pasivo";
    if (s.includes("pat") || s.includes("cap")) return "patrimonio";
    if (s.includes("ing")) return "ingreso";
    if (s.includes("gas") || s.includes("egr")) return "gasto";
    return null;
  }

  function parseNaturalezaStr(str) {
    if (!str) return null;
    const s = str.toLowerCase();
    if (s.includes("acr") || s.includes("cred")) return "acreedora";
    if (s.includes("deu") || s.includes("deb")) return "deudora";
    return null;
  }

  function processRawMatrix(rows) {
    const result = [];
    rows.forEach((row) => {
      if (!Array.isArray(row) || !row.length) return;
      const col0 = String(row[0] || "").trim();
      const col1 = String(row[1] || "").trim();
      if (!col0 || !col1) return;
      if (/c[oó]digo/i.test(col0) || /nombre|cuenta/i.test(col1)) return;

      const col2 = String(row[2] || "").trim();
      const col3 = String(row[3] || "").trim();

      const el = parseElementoStr(col2) || inferElemento(col0);
      const nat = parseNaturalezaStr(col3) || inferNaturaleza(el);

      result.push({
        codigo: col0,
        nombre: col1,
        elemento: el,
        naturaleza: nat
      });
    });
    return result;
  }

  function parseTextContent(text) {
    const lines = text.split(/\r?\n/);
    const matrix = lines.map((line) => {
      if (!line.trim()) return null;
      let parts = [];
      if (line.includes("\t")) parts = line.split("\t");
      else if (line.includes(";")) parts = line.split(";");
      else if (line.includes("|")) parts = line.split("|");
      else if (line.includes(",")) parts = line.split(",");
      else parts = line.trim().split(/\s{2,}/);
      return parts.map((p) => p.trim());
    }).filter(Boolean);

    return processRawMatrix(matrix);
  }

  function parseFileToAccounts(file, callback) {
    const ext = file.name.split(".").pop().toLowerCase();
    if ((ext === "xlsx" || ext === "xls") && window.XLSX) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rawRows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          const accounts = processRawMatrix(rawRows);
          callback(null, accounts);
        } catch (err) {
          callback(err);
        }
      };
      reader.onerror = (err) => callback(err);
      reader.readAsArrayBuffer(file);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target.result;
          const accounts = parseTextContent(text);
          callback(null, accounts);
        } catch (err) {
          callback(err);
        }
      };
      reader.onerror = (err) => callback(err);
      reader.readAsText(file);
    }
  }

  function openImportModal() {
    document.getElementById("importModal")?.remove();
    const modal = document.createElement("div");
    modal.id = "importModal";
    modal.className = "modal-bg";
    modal.innerHTML = `<div class="card account-help-modal" style="width:min(100%, 40rem);" role="dialog" aria-modal="true">
      <div class="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">📥 Importar Cuentas Contables</h2>
          <p class="text-xs text-slate-500">Soporta Excel (.xlsx, .xls), CSV y Archivos de Texto (.txt)</p>
        </div>
        <button type="button" class="btn btn-ghost" data-close-import>Cerrar</button>
      </div>

      <div class="space-y-4 my-4">
        <div class="p-3 bg-indigo-50/70 border border-indigo-100 rounded-lg text-xs text-slate-700 space-y-1">
          <p class="font-semibold text-indigo-900">Formato del archivo:</p>
          <p>Columnas: <strong>1. Código</strong> | <strong>2. Nombre</strong> | 3. Elemento (opcional) | 4. Naturaleza (opcional)</p>
          <p class="text-indigo-600">💡 Si no incluyes Elemento o Naturaleza, se autodetectarán según el primer dígito del código.</p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <input type="file" id="importFileInput" accept=".xlsx, .xls, .csv, .txt" class="block text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer" />
          <div class="flex gap-2 ml-auto">
            <button type="button" id="btnDownloadCSV" class="btn btn-ghost text-xs">📄 Plantilla CSV</button>
            <button type="button" id="btnDownloadTXT" class="btn btn-ghost text-xs">📄 Plantilla TXT</button>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 pt-1">
          <label class="flex items-center gap-1.5 cursor-pointer">
            <input type="radio" name="importMode" value="merge" checked />
            Agregar / Actualizar a cuentas actuales
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer">
            <input type="radio" name="importMode" value="replace" />
            Reemplazar catálogo completo
          </label>
        </div>

        <div id="importPreviewArea" class="hidden space-y-2">
          <h4 class="text-xs font-semibold text-slate-700">Cuentas detectadas en el archivo (<span id="importCount">0</span>)</h4>
          <div class="table-wrap max-h-56 overflow-y-auto">
            <table class="data text-xs">
              <thead><tr><th>Código</th><th>Nombre</th><th>Elemento</th><th>Naturaleza</th><th>Estado</th></tr></thead>
              <tbody id="importPreviewRows"></tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
        <button type="button" class="btn btn-ghost text-xs" data-close-import>Cancelar</button>
        <button type="button" id="btnConfirmImport" class="btn btn-primary text-xs" disabled>Confirmar e Importar</button>
      </div>
    </div>`;

    document.body.appendChild(modal);
    modal.querySelector("[data-close-import]").onclick = () => modal.remove();
    modal.querySelector("#btnDownloadCSV").onclick = downloadTemplateCSV;
    modal.querySelector("#btnDownloadTXT").onclick = downloadTemplateTXT;

    let parsedAccounts = [];

    const fileInput = modal.querySelector("#importFileInput");
    const previewArea = modal.querySelector("#importPreviewArea");
    const previewRows = modal.querySelector("#importPreviewRows");
    const importCount = modal.querySelector("#importCount");
    const confirmBtn = modal.querySelector("#btnConfirmImport");

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      parseFileToAccounts(file, (err, accounts) => {
        if (err || !accounts || !accounts.length) {
          toast("No se pudieron detectar cuentas en el archivo.");
          confirmBtn.disabled = true;
          previewArea.classList.add("hidden");
          return;
        }

        parsedAccounts = accounts;
        importCount.textContent = accounts.length;
        const existingCodes = new Set(state.cuentas.map((c) => c.codigo));

        previewRows.innerHTML = accounts
          .map((c) => {
            const isDup = existingCodes.has(c.codigo);
            return `<tr>
              <td class="font-mono text-xs">${esc(c.codigo)}</td>
              <td>${esc(c.nombre)}</td>
              <td><span class="badge badge-info">${esc(labelEl(c.elemento))}</span></td>
              <td><span class="badge badge-gray">${esc(labelNat(c.naturaleza))}</span></td>
              <td>${isDup ? '<span class="text-amber-600 font-semibold">Existente</span>' : '<span class="text-emerald-600 font-semibold">Nueva</span>'}</td>
            </tr>`;
          })
          .join("");

        previewArea.classList.remove("hidden");
        confirmBtn.disabled = false;
      });
    };

    confirmBtn.onclick = () => {
      if (!parsedAccounts.length) return;
      const mode = modal.querySelector('input[name="importMode"]:checked').value;

      if (mode === "replace") {
        state.cuentas = parsedAccounts.map((c) => ({
          id: uid(),
          codigo: c.codigo,
          nombre: c.nombre,
          elemento: c.elemento,
          naturaleza: c.naturaleza,
        }));
        toast(`Catálogo reemplazado con ${parsedAccounts.length} cuentas.`);
      } else {
        let agregadas = 0;
        let actualizadas = 0;
        parsedAccounts.forEach((c) => {
          const existing = state.cuentas.find((x) => x.codigo === c.codigo);
          if (existing) {
            existing.nombre = c.nombre;
            existing.elemento = c.elemento;
            existing.naturaleza = c.naturaleza;
            actualizadas++;
          } else {
            state.cuentas.push({
              id: uid(),
              codigo: c.codigo,
              nombre: c.nombre,
              elemento: c.elemento,
              naturaleza: c.naturaleza,
            });
            agregadas++;
          }
        });
        toast(`Importadas: ${agregadas} cuentas nuevas, ${actualizadas} actualizadas.`);
      }

      save();
      modal.remove();
      render();
    };
  }

  /* ----- libro diario / ajustes ----- */

  function opcionesCuentas() {
    return [...state.cuentas]
      .sort((a, b) => a.codigo.localeCompare(b.codigo))
      .map((c) => `<option value="${c.id}">${esc(c.codigo)} · ${esc(c.nombre)}</option>`)
      .join("");
  }

  function openAccountHelp(id) {
    const account = cuentaById(id);
    if (!account) return;
    document.getElementById("accountHelp")?.remove();
    const modal = document.createElement("div");
    modal.id = "accountHelp";
    modal.className = "modal-bg";
    modal.innerHTML = `<div class="card account-help-modal" role="dialog" aria-modal="true" aria-labelledby="accountHelpTitle">
      <div class="flex items-start justify-between gap-3"><div><div class="text-xs uppercase tracking-wide text-slate-500">Referencia de cuenta</div><h2 id="accountHelpTitle" class="text-lg font-semibold text-slate-800 mt-1">${esc(account.codigo)} · ${esc(account.nombre)}</h2></div><button type="button" class="btn btn-ghost" data-close-account-help aria-label="Cerrar">Cerrar</button></div>
      <div class="grid sm:grid-cols-2 gap-3 mt-5"><div class="help-detail"><span>Elemento</span><strong>${esc(labelEl(account.elemento))}</strong></div><div class="help-detail"><span>Naturaleza</span><strong>${esc(labelNat(account.naturaleza))}</strong></div></div>
      <div class="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs text-slate-500">Documento de consulta oficial:</span>
        <a href="PLAN%20DE%20CUENTAS%20ACTUALIZADO.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-ghost text-xs">📄 Abrir Plan de Cuentas (PDF)</a>
      </div>
    </div>`;
    document.body.appendChild(modal);
    modal.querySelector("[data-close-account-help]").onclick = () => modal.remove();
    modal.onclick = (event) => { if (event.target === modal) modal.remove(); };
  }

  let activeTooltipElem = null;

  function showAccountTooltip(targetBtn) {
    const id = targetBtn.dataset.accountHelp;
    if (!id) return;
    const account = cuentaById(id);
    if (!account) return;

    hideAccountTooltip();

    const tooltip = document.createElement("div");
    tooltip.id = "accountHelpTooltip";
    tooltip.className = "account-popover-tooltip";
    tooltip.innerHTML = `
      <div class="popover-header">
        <span class="popover-code">${esc(account.codigo)}</span>
        <span class="popover-title">${esc(account.nombre)}</span>
      </div>
      <div class="popover-badges">
        <span class="badge badge-info">${esc(labelEl(account.elemento))}</span>
        <span class="badge badge-gray">${esc(labelNat(account.naturaleza))}</span>
      </div>
      <div class="popover-hint">💡 Clic para abrir detalle completo</div>
    `;

    document.body.appendChild(tooltip);
    activeTooltipElem = tooltip;

    const rect = targetBtn.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.top - tooltipRect.height - 10;

    if (top < 10) {
      top = rect.bottom + 10;
      tooltip.classList.add("pos-bottom");
    } else {
      tooltip.classList.add("pos-top");
    }

    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }

    tooltip.style.left = `${left + window.scrollX}px`;
    tooltip.style.top = `${top + window.scrollY}px`;

    requestAnimationFrame(() => {
      if (activeTooltipElem === tooltip) {
        tooltip.classList.add("visible");
      }
    });
  }

  function hideAccountTooltip() {
    if (activeTooltipElem) {
      const elem = activeTooltipElem;
      activeTooltipElem = null;
      elem.classList.remove("visible");
      setTimeout(() => elem.remove(), 200);
    }
  }

  document.addEventListener("mouseover", (e) => {
    const btn = e.target.closest(".account-help");
    if (btn && btn.dataset.accountHelp) {
      showAccountTooltip(btn);
    }
  });

  document.addEventListener("mouseout", (e) => {
    const btn = e.target.closest(".account-help");
    if (btn) {
      hideAccountTooltip();
    }
  });

  let activePickerDropdown = null;

  function closeActivePickerDropdown() {
    if (activePickerDropdown) {
      activePickerDropdown.remove();
      activePickerDropdown = null;
    }
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".account-picker") && !e.target.closest(".account-picker-dropdown")) {
      closeActivePickerDropdown();
    }
  });

  window.addEventListener("scroll", closeActivePickerDropdown, true);

  function setupAccountPicker(pickerInput, hiddenInput, accountHelp, onSelectCallback) {
    let highlightedIndex = -1;

    const getFilteredCuentas = (query) => {
      const q = query.trim().toLowerCase();
      const all = [...state.cuentas].sort((a, b) => a.codigo.localeCompare(b.codigo));
      if (!q) return all;
      return all.filter(
        (c) =>
          c.codigo.toLowerCase().includes(q) ||
          c.nombre.toLowerCase().includes(q) ||
          `${c.codigo} ${c.nombre}`.toLowerCase().includes(q)
      );
    };

    const renderDropdown = () => {
      closeActivePickerDropdown();

      const selectedCta = cuentaById(hiddenInput.value);
      const isCurrentTextSelected = selectedCta && pickerInput.value === `${selectedCta.codigo} · ${selectedCta.nombre}`;
      const query = isCurrentTextSelected ? "" : pickerInput.value;
      const list = getFilteredCuentas(query);

      const dropdown = document.createElement("div");
      dropdown.className = "account-picker-dropdown";

      if (!list.length) {
        dropdown.innerHTML = `<div class="p-3 text-xs text-slate-400 text-center">No se encontraron cuentas que coincidan</div>`;
      } else {
        dropdown.innerHTML = list
          .map(
            (c, idx) => `<div class="account-picker-item" data-id="${c.id}" data-index="${idx}">
              <span class="code">${esc(c.codigo)}</span>
              <span class="name">${esc(c.nombre)}</span>
              <span class="badge badge-info">${esc(labelEl(c.elemento))}</span>
            </div>`
          )
          .join("");
      }

      document.body.appendChild(dropdown);
      activePickerDropdown = dropdown;

      const rect = pickerInput.getBoundingClientRect();
      dropdown.style.position = "fixed";
      dropdown.style.top = `${rect.bottom + 4}px`;
      dropdown.style.left = `${rect.left}px`;
      dropdown.style.width = `${Math.max(rect.width, 280)}px`;

      dropdown.querySelectorAll(".account-picker-item").forEach((item) => {
        item.onmousedown = (e) => {
          e.preventDefault();
          selectAccount(item.dataset.id);
        };
      });
    };

    const selectAccount = (id) => {
      const c = cuentaById(id);
      if (c) {
        hiddenInput.value = c.id;
        pickerInput.value = `${c.codigo} · ${c.nombre}`;
        accountHelp.hidden = false;
        accountHelp.dataset.accountHelp = c.id;
        accountHelp.onclick = () => openAccountHelp(c.id);
      } else {
        hiddenInput.value = "";
        pickerInput.value = "";
        accountHelp.hidden = true;
        accountHelp.dataset.accountHelp = "";
      }
      closeActivePickerDropdown();
      if (onSelectCallback) onSelectCallback();
    };

    pickerInput.addEventListener("focus", () => {
      renderDropdown();
    });

    pickerInput.addEventListener("click", () => {
      renderDropdown();
    });

    pickerInput.addEventListener("input", () => {
      hiddenInput.value = "";
      accountHelp.hidden = true;
      highlightedIndex = -1;
      renderDropdown();
      if (onSelectCallback) onSelectCallback();
    });

    const updateHighlight = (items) => {
      items.forEach((item, idx) => {
        item.classList.toggle("highlighted", idx === highlightedIndex);
        if (idx === highlightedIndex) {
          item.scrollIntoView({ block: "nearest" });
        }
      });
    };

    pickerInput.addEventListener("keydown", (e) => {
      if (!activePickerDropdown) {
        if (e.key === "ArrowDown" || e.key === "Enter") {
          renderDropdown();
          return;
        }
      }
      const items = activePickerDropdown ? activePickerDropdown.querySelectorAll(".account-picker-item") : [];

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!items.length) return;
        highlightedIndex = (highlightedIndex + 1) % items.length;
        updateHighlight(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!items.length) return;
        highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
        updateHighlight(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlightedIndex >= 0 && items[highlightedIndex]) {
          selectAccount(items[highlightedIndex].dataset.id);
        } else if (items.length === 1) {
          selectAccount(items[0].dataset.id);
        }
      } else if (e.key === "Escape" || e.key === "Tab") {
        closeActivePickerDropdown();
      }
    });

    pickerInput.addEventListener("blur", () => {
      setTimeout(() => {
        if (!hiddenInput.value) {
          if (!pickerInput.value.trim()) {
            selectAccount("");
          } else {
            const selectedCta = cuentaById(hiddenInput.value);
            if (selectedCta) {
              pickerInput.value = `${selectedCta.codigo} · ${selectedCta.nombre}`;
            }
          }
        }
      }, 180);
    });
  }

  function historialAsientos(esAjuste) {
    const list = (esAjuste ? asientosAjuste() : asientosNormales()).sort((a, b) =>
      b.fecha.localeCompare(a.fecha)
    );
    if (!list.length) {
      return `<p class="text-sm text-slate-500 mt-6">Aún no hay asientos${esAjuste ? " de ajuste" : ""}.</p>`;
    }
    return list
      .map((a) => {
        const t = totalesAsiento(a.lineas);
        const lineas = a.lineas
          .map((l) => {
            const c = cuentaById(l.cuentaId);
            return `<tr>
              <td class="pl-6 text-slate-600">${esc(c ? `${c.codigo} ${c.nombre}` : "—")}</td>
              <td class="num">${l.debe ? fmt(l.debe) : ""}</td>
              <td class="num">${l.haber ? fmt(l.haber) : ""}</td>
            </tr>`;
          })
          .join("");
        return `<div class="table-wrap card mb-3">
          <table class="data">
            <thead><tr>
              <th>${esc(a.fecha)} · ${esc(a.glosa)} ${
                a.esAjuste ? `<span class="badge badge-info ml-2">Ajuste</span>` : ""
              }</th>
              <th class="num w-32">Debe</th>
              <th class="num w-32">Haber</th>
            </tr></thead>
            <tbody>${lineas}</tbody>
            <tfoot><tr>
              <td>
                <div class="flex items-center gap-2">Totales ${badgeCuadra(t.cuadrado, "Cuadrado", "Descuadrado")}
                  <div class="ml-auto flex items-center gap-1.5 no-print">
                    <button type="button" class="btn btn-ghost text-xs py-1 px-2.5" data-edit-asiento="${a.id}">Editar</button>
                    <button type="button" class="btn btn-danger text-xs py-1 px-2.5" data-del-asiento="${a.id}">Eliminar</button>
                  </div>
                </div>
              </td>
              <td class="num">${fmt(t.debe)}</td>
              <td class="num">${fmt(t.haber)}</td>
            </tr></tfoot>
          </table>
        </div>`;
      })
      .join("");
  }

  function viewLibro({ esAjuste }) {
    const title = esAjuste ? "Libro de Ajustes" : "Libro Diario";
    const sub = esAjuste
      ? "Asientos de fin de periodo (depreciaciones, provisiones, devengos). Se marcan internamente como esAjuste = true."
      : "Registre partidas dobles. El asiento solo se guarda si Suma Debe = Suma Haber.";
    const extra = esAjuste
      ? `<label class="inline-flex items-center gap-2 text-sm bg-white border border-slate-200 rounded-xl px-3 py-2">
           <input type="checkbox" id="sinAjustes" ${state.sinAjustes ? "checked" : ""} />
           Este periodo no tiene ajustes
         </label>`
      : "";

    return (
      pageHead(title, sub, extra) +
      `<div class="card p-4 mb-5">
        <form id="formAsiento" class="space-y-3">
          <div class="grid md:grid-cols-3 gap-3">
            <div class="field"><label>Fecha</label><input type="date" name="fecha" class="input" required /></div>
            <div class="field md:col-span-2"><label>Glosa</label><input name="glosa" class="input" required placeholder="Descripción del asiento" /></div>
          </div>
          <div class="table-wrap">
            <table class="data" id="tablaLineas">
              <thead><tr><th>Cuenta</th><th class="num">Debe</th><th class="num">Haber</th><th class="no-print"></th></tr></thead>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <td>Totales <span id="badgePartida"></span></td>
                  <td class="num" id="totDebe">0,00</td>
                  <td class="num" id="totHaber">0,00</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="flex flex-wrap gap-2">
            <button type="button" id="addLinea" class="btn btn-ghost">Agregar fila</button>
            <button type="submit" id="saveAsiento" class="btn btn-primary" disabled>Guardar asiento</button>
            <span id="msgDiff" class="text-sm text-slate-500 self-center"></span>
          </div>
        </form>
      </div>
      <h3 class="text-sm font-semibold text-slate-600 mb-2">Asientos registrados</h3>
      ${historialAsientos(esAjuste)}`
    );
  }

  function bindLibro(esAjuste) {
    const form = document.getElementById("formAsiento");
    form.fecha.value = today();
    const tbody = document.querySelector("#tablaLineas tbody");

    const readLineas = () =>
      [...tbody.querySelectorAll("tr")].map((tr) => ({
        cuentaId: tr.querySelector(".sel-cta").value,
        debe: money(tr.querySelector(".inp-debe").value),
        haber: money(tr.querySelector(".inp-haber").value),
      }));

    const refreshTotales = () => {
      const t = totalesAsiento(readLineas());
      document.getElementById("totDebe").textContent = fmt(t.debe);
      document.getElementById("totHaber").textContent = fmt(t.haber);
      const ok = asientoCuadrado({
        fecha: form.fecha.value,
        glosa: form.glosa.value,
        lineas: readLineas(),
      });
      document.getElementById("saveAsiento").disabled = !ok;
      document.getElementById("badgePartida").innerHTML = badgeCuadra(
        t.debe === t.haber && t.debe > 0,
        "Partida doble OK",
        "No cuadra"
      );
      const d = t.diff;
      document.getElementById("msgDiff").textContent =
        t.debe === t.haber ? "" : `Diferencia: ${fmt(Math.abs(d))} al ${d > 0 ? "Debe" : "Haber"}`;
    };

    const addRow = (linea = { cuentaId: "", debe: "", haber: "" }) => {
      const tr = document.createElement("tr");
      const ctaInit = cuentaById(linea.cuentaId);
      const ctaText = ctaInit ? `${ctaInit.codigo} · ${ctaInit.nombre}` : "";

      tr.innerHTML = `<td>
        <div class="flex items-center gap-1">
          <div class="account-picker">
            <input type="text" class="input account-picker-input" placeholder="🔍 Buscar código o nombre…" value="${esc(ctaText)}" autocomplete="off" />
            <input type="hidden" class="sel-cta" value="${linea.cuentaId || ""}" />
          </div>
          <button type="button" class="account-help" data-line-account-help title="Consultar cuenta" aria-label="Consultar cuenta" ${linea.cuentaId ? "" : "hidden"}>?</button>
        </div>
      </td>
      <td><input class="input num inp-debe" type="number" min="0" step="0.01" value="${linea.debe || ""}" /></td>
      <td><input class="input num inp-haber" type="number" min="0" step="0.01" value="${linea.haber || ""}" /></td>
      <td class="no-print"><button type="button" class="btn btn-danger del-linea">Quitar</button></td>`;

      tbody.appendChild(tr);

      const debe = tr.querySelector(".inp-debe");
      const haber = tr.querySelector(".inp-haber");
      const onDebe = () => {
        if (money(debe.value) > 0) haber.value = "";
        refreshTotales();
      };
      const onHaber = () => {
        if (money(haber.value) > 0) debe.value = "";
        refreshTotales();
      };
      debe.addEventListener("input", onDebe);
      debe.addEventListener("change", onDebe);
      haber.addEventListener("input", onHaber);
      haber.addEventListener("change", onHaber);

      const pickerInput = tr.querySelector(".account-picker-input");
      const hiddenInput = tr.querySelector(".sel-cta");
      const accountHelp = tr.querySelector("[data-line-account-help]");

      if (linea.cuentaId) {
        accountHelp.dataset.accountHelp = linea.cuentaId;
        accountHelp.onclick = () => openAccountHelp(linea.cuentaId);
      }

      setupAccountPicker(pickerInput, hiddenInput, accountHelp, refreshTotales);

      tr.querySelector(".del-linea").onclick = () => {
        tr.remove();
        if (!tbody.children.length) addRow();
        refreshTotales();
      };
    };

    addRow();
    addRow();
    document.getElementById("addLinea").onclick = () => addRow();
    form.glosa.addEventListener("input", refreshTotales);
    form.fecha.addEventListener("change", refreshTotales);
    refreshTotales();

    let editingAsientoId = null;

    form.onsubmit = (e) => {
      e.preventDefault();
      const lineasValidas = readLineas().filter(lineaValida);
      if (!lineasValidas.length) return toast("Agregue al menos una línea válida al asiento.");
      const asiento = {
        id: editingAsientoId || uid(),
        fecha: form.fecha.value,
        glosa: form.glosa.value.trim(),
        esAjuste: !!esAjuste,
        lineas: lineasValidas,
      };
      if (!asientoCuadrado(asiento)) return toast("El asiento debe estar cuadrado para guardarse.");
      if (esAjuste) state.sinAjustes = false;

      if (editingAsientoId) {
        const idx = state.asientos.findIndex((a) => a.id === editingAsientoId);
        if (idx !== -1) state.asientos[idx] = asiento;
        else state.asientos.push(asiento);
        toast("Asiento actualizado.");
      } else {
        state.asientos.push(asiento);
        toast("Asiento guardado.");
      }

      editingAsientoId = null;
      save();
      render();
    };

    document.querySelectorAll("[data-edit-asiento]").forEach((b) => {
      b.onclick = () => {
        const a = state.asientos.find((x) => x.id === b.dataset.editAsiento);
        if (!a) return;
        editingAsientoId = a.id;
        form.fecha.value = a.fecha;
        form.glosa.value = a.glosa;
        tbody.innerHTML = "";
        a.lineas.forEach((l) => addRow(l));
        refreshTotales();
        form.glosa.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast("Cargado en el formulario para editar.");
      };
    });

    document.querySelectorAll("[data-del-asiento]").forEach((b) => {
      b.onclick = () => {
        if (!confirm("¿Eliminar este asiento?")) return;
        state.asientos = state.asientos.filter((a) => a.id !== b.dataset.delAsiento);
        save();
        render();
      };
    });

    const chk = document.getElementById("sinAjustes");
    if (chk) {
      chk.onchange = () => {
        if (chk.checked && asientosAjuste().length) {
          chk.checked = false;
          return toast("Elimine los asientos de ajuste antes de marcar el periodo sin ajustes.");
        }
        state.sinAjustes = chk.checked;
        save();
        renderNav();
        toast(chk.checked ? "Fase 2 cerrada sin ajustes. Ya puede continuar." : "Fase 2 requiere ajustes o confirmación.");
      };
    }
  }

  /* ----- mayor ----- */

  function viewMayor(incluirAjustes) {
    const data = mayor(incluirAjustes);
    const bloques = data.length
      ? data
          .map((m) => {
            const info = getSaldoInfo(m.debe, m.haber);
            const filas = m.lineas
              .map(
                (l) => `<tr>
                  <td>${esc(l.fecha)}${l.esAjuste ? ` <span class="badge badge-info">Aj.</span>` : ""}</td>
                  <td>${esc(l.glosa)}</td>
                  <td class="num">${l.debe ? fmt(l.debe) : ""}</td>
                  <td class="num">${l.haber ? fmt(l.haber) : ""}</td>
                </tr>`
              )
              .join("");
            return `<div class="card ledger-block mb-4 overflow-hidden">
              <div class="px-4 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between gap-2">
                <div>
                  <div class="font-semibold">${esc(m.cuenta.codigo)} · ${esc(m.cuenta.nombre)}</div>
                  <div class="text-xs text-slate-500">${esc(labelEl(m.cuenta.elemento))} · Naturaleza ${esc(
                    labelNat(m.cuenta.naturaleza)
                  )}</div>
                </div>
                <div class="text-sm font-semibold text-slate-700">${info.texto}</div>
              </div>
              <table class="data">
                <thead><tr><th>Fecha</th><th>Glosa</th><th class="num">Débitos</th><th class="num">Créditos</th></tr></thead>
                <tbody>${filas}</tbody>
                <tfoot><tr><td colspan="2">Totales</td><td class="num">${fmt(m.debe)}</td><td class="num">${fmt(
                  m.haber
                )}</td></tr></tfoot>
              </table>
            </div>`;
          })
          .join("")
      : `<div class="card p-6 text-slate-500">No hay cuentas con movimiento.</div>`;

    return (
      pageHead(
        incluirAjustes ? "Mayor Ajustado" : "Mayorización",
        incluirAjustes
          ? "Mayor acumulado con asientos del diario y de ajustes."
          : "Cuentas con movimiento y detalle de débitos y créditos."
      ) + bloques
    );
  }

  /* ----- BTC ----- */

  function viewBtc(incluirAjustes) {
    const tb = trialBalance(incluirAjustes);
    const rows = tb.rows
      .map(
        (r) => `<tr>
          <td class="font-mono text-xs">${esc(r.cuenta.codigo)}</td>
          <td>${esc(r.cuenta.nombre)}</td>
          <td class="num">${fmt(r.debe)}</td>
          <td class="num">${fmt(r.haber)}</td>
          <td class="num">${r.saldoDeudor ? fmt(r.saldoDeudor) : ""}</td>
          <td class="num">${r.saldoAcreedor ? fmt(r.saldoAcreedor) : ""}</td>
        </tr>`
      )
      .join("");

    return (
      pageHead(
        incluirAjustes ? "Balance de Comprobación Ajustado" : "Balance de Comprobación",
        "Tabla de sumas y saldos. Debe cuadrar Sumas (Debe = Haber) y Saldos (Deudor = Acreedor)."
      ) +
      kpis([
        { lbl: "Suma Debe", val: fmt(tb.sum.debe) },
        { lbl: "Suma Haber", val: fmt(tb.sum.haber) },
        { lbl: "Sumas", val: tb.sumasOk ? "Cuadran" : "Descuadran", cls: tb.sumasOk ? "text-emerald-700" : "text-red-600" },
        { lbl: "Saldos", val: tb.saldosOk ? "Cuadran" : "Descuadran", cls: tb.saldosOk ? "text-emerald-700" : "text-red-600" },
      ]) +
      `<div class="mb-3">${badgeCuadra(tb.sumasOk, "Sumas Debe = Haber", "Sumas no coinciden")}
       ${badgeCuadra(tb.saldosOk, "Deudor = Acreedor", "Saldos no coinciden")}</div>
      <div class="table-wrap card">
        <table class="data">
          <thead><tr>
            <th>Código</th><th>Cuenta</th>
            <th class="num">Debe</th><th class="num">Haber</th>
            <th class="num">Saldo deudor</th><th class="num">Saldo acreedor</th>
          </tr></thead>
          <tbody>${rows || `<tr><td colspan="6">Sin movimientos</td></tr>`}</tbody>
          <tfoot><tr>
            <td colspan="2">Totales</td>
            <td class="num">${fmt(tb.sum.debe)}</td>
            <td class="num">${fmt(tb.sum.haber)}</td>
            <td class="num">${fmt(tb.sum.saldoDeudor)}</td>
            <td class="num">${fmt(tb.sum.saldoAcreedor)}</td>
          </tr></tfoot>
        </table>
      </div>`
    );
  }

  /* ----- ER ----- */

  function viewER() {
    const er = estadoResultados();
    const ganancia = er.utilidad >= 0;
    const filasIng = er.ingresos
      .map((r) => `<tr><td>${esc(r.cuenta.codigo)} ${esc(r.cuenta.nombre)}</td><td class="num">${fmt(r.saldo)}</td></tr>`)
      .join("");
    const filasGas = er.gastos
      .map((r) => `<tr><td>${esc(r.cuenta.codigo)} ${esc(r.cuenta.nombre)}</td><td class="num">${fmt(r.saldo)}</td></tr>`)
      .join("");

    return (
      pageHead(
        "Estado de Resultados",
        "Ingresos − Costos y Gastos = Utilidad o Pérdida del ejercicio (con saldos ya ajustados)."
      ) +
      kpis([
        { lbl: "Ingresos", val: fmt(er.totalIng) },
        { lbl: "Costos y gastos", val: fmt(er.totalGas) },
        {
          lbl: ganancia ? "Utilidad antes de deducciones" : "Pérdida antes de deducciones",
          val: fmt(Math.abs(er.utilidad)),
          cls: ganancia ? "text-emerald-700" : "text-red-600",
        },
        { lbl: "15% Participación Trabajadores", val: fmt(er.participacionTrabajadores) },
        { lbl: "Base imponible", val: fmt(er.baseImponible) },
        { lbl: "25% Impuesto a la Renta", val: fmt(er.impuestoRenta) },
      ]) +
      `<div class="grid lg:grid-cols-2 gap-4">
        <div class="table-wrap card">
          <table class="data">
            <thead><tr><th>Ingresos</th><th class="num">Monto</th></tr></thead>
            <tbody>${filasIng || `<tr><td colspan="2" class="text-slate-500">Sin ingresos</td></tr>`}</tbody>
            <tfoot><tr><td>Total ingresos</td><td class="num">${fmt(er.totalIng)}</td></tr></tfoot>
          </table>
        </div>
        <div class="table-wrap card">
          <table class="data">
            <thead><tr><th>Costos y gastos</th><th class="num">Monto</th></tr></thead>
            <tbody>${filasGas || `<tr><td colspan="2" class="text-slate-500">Sin gastos</td></tr>`}</tbody>
            <tfoot><tr><td>Total gastos</td><td class="num">${fmt(er.totalGas)}</td></tr></tfoot>
          </table>
        </div>
      </div>
      <div class="card p-4 mt-4 ${ganancia ? "eq-ok" : "eq-bad"}">
        <div class="text-sm text-slate-500">Resultado del ejercicio</div>
        <div class="text-lg font-semibold">${ganancia ? "Utilidad Neta del Ejercicio" : "Pérdida Neta del Ejercicio"}: ${fmt(Math.abs(er.utilidadNeta))}</div>
      </div>`
    );
  }

  /* ----- BG ----- */

  function viewBG() {
    const bg = balanceGeneral();
    const block = (title, rows, extraRow, total) => {
      const body =
        rows
          .map((r) => `<tr><td>${esc(r.cuenta.codigo)} ${esc(r.cuenta.nombre)}</td><td class="num">${fmt(r.saldo)}</td></tr>`)
          .join("") + (extraRow || "");
      return `<div class="table-wrap card mb-4">
        <table class="data">
          <thead><tr><th>${esc(title)}</th><th class="num">Monto</th></tr></thead>
          <tbody>${body || `<tr><td colspan="2" class="text-slate-500">Sin saldos</td></tr>`}</tbody>
          <tfoot><tr><td>Total ${esc(title)}</td><td class="num">${fmt(total)}</td></tr></tfoot>
        </table>
      </div>`;
    };
    const utilRow = `<tr>
      <td>Utilidad Neta del Ejercicio</td>
      <td class="num">${fmt(bg.utilidad)}</td>
    </tr>`;

    return (
      pageHead(
        "Balance General",
        "Activo = Pasivo Total + Patrimonio. La utilidad o pérdida se transfiere al Patrimonio sin asiento de cierre."
      ) +
      `<div class="card p-4 mb-5 ${bg.cuadra ? "eq-ok" : "eq-bad"} flex flex-wrap items-center justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-wide text-slate-500">Ecuación contable</div>
          <div class="text-lg font-semibold">Activo ${fmt(bg.activo)} = Pasivo ${fmt(bg.pasivo)} + Patrimonio ${fmt(
            bg.patrimonio
          )}</div>
        </div>
        ${badgeCuadra(bg.cuadra, "La ecuación cuadra", `Descuadra por ${fmt(Math.abs(bg.diferencia))}`)}
      </div>
      <div class="grid lg:grid-cols-2 gap-4">
        <div>${block("Activo", bg.grupos.activo, "", bg.activo)}</div>
        <div>
          ${block("Pasivo Corriente", bg.grupos.pasivoCorriente, "", bg.pasivoCorriente)}
          ${block("Pasivo No Corriente", bg.grupos.pasivoNoCorriente, "", bg.pasivoNoCorriente)}
          ${block("Pasivo Total", [],
            `<tr><td>Pasivo Corriente</td><td class="num">${fmt(bg.pasivoCorriente)}</td></tr>` +
            `<tr><td>Pasivo No Corriente</td><td class="num">${fmt(bg.pasivoNoCorriente)}</td></tr>`,
            bg.pasivo
          )}
          ${block("Patrimonio", bg.grupos.patrimonio, utilRow, bg.patrimonio)}
        </div>
      </div>`
    );
  }

  function bindHeader() {
    const emp = document.getElementById("empresa");
    const per = document.getElementById("periodo");
    emp.value = state.empresa;
    per.value = state.periodo;
    emp.oninput = () => {
      state.empresa = emp.value;
      save();
    };
    per.oninput = () => {
      state.periodo = per.value;
      save();
    };
    document.getElementById("btnReset").onclick = () => {
      if (!confirm("Esto borra catálogo, asientos y vuelve al plan de cuentas de prueba. ¿Continuar?")) return;
      state = defaultState();
      save();
      render();
      toast("Datos restablecidos.");
    };
    document.getElementById("btnTutorial").onclick = () => openTutorial();
    document.getElementById("btnCasoPrueba").onclick = () => {
      if (!confirm("Esto reemplazará los datos actuales por el caso Distribuidora Vallejo. ¿Continuar?")) return;
      cargarCasoPrueba();
    };
  }

  const TUTORIAL_STEPS = [
    {
      target: null,
      title: "Bienvenido al sistema contable",
      text: "Este recorrido te muestra cómo avanzar por el ciclo contable de principio a fin. Puedes saltarlo ahora y volver a abrirlo con el botón Ver tutorial.",
    },
    {
      target: "header",
      title: "Identifica tu ejercicio",
      text: "Escribe la empresa y el periodo en la parte superior. Los cambios se guardan automáticamente en este navegador.",
    },
    {
      target: "#nav",
      title: "Navegación por fases",
      text: "El menú lateral organiza el trabajo. Los pasos se desbloquean cuando completas los requisitos contables anteriores.",
    },
    {
      target: "[data-nav=\"catalogo\"]",
      title: "1. Catálogo de cuentas",
      text: "Comienza revisando o agregando las cuentas que utilizarás. Cada cuenta define su elemento y naturaleza.",
    },
    {
      target: "[data-nav=\"diario\"]",
      title: "2. Libro Diario",
      text: "Registra cada operación con partida doble. El sistema solo permite guardar asientos donde el Debe y el Haber coinciden.",
    },
    {
      target: "[data-nav=\"btc\"]",
      title: "3. Comprueba y ajusta",
      text: "Después del Diario consulta la Mayorización y el Balance de Comprobación. Luego registra ajustes de fin de periodo y revisa sus balances ajustados.",
    },
    {
      target: "[data-nav=\"er\"]",
      title: "4. Estados financieros",
      text: "Al completar las fases anteriores podrás consultar el Estado de Resultados y el Balance General. Usa Ver tutorial cuando quieras repasar el flujo.",
    },
  ];

  function closeTutorial() {
    document.getElementById("tutorial")?.remove();
    document.querySelectorAll(".tutorial-target").forEach((el) => el.classList.remove("tutorial-target"));
    document.querySelectorAll(".tutorial-target-parent").forEach((el) => el.classList.remove("tutorial-target-parent"));
  }

  function openTutorial() {
    closeTutorial();
    let current = 0;
    const overlay = document.createElement("div");
    overlay.id = "tutorial";
    overlay.className = "modal-bg tutorial-bg";
    overlay.innerHTML = `<div class="tutorial-card" role="dialog" aria-modal="true" aria-labelledby="tutorialTitle">
      <div class="tutorial-progress mb-4"><span></span></div>
      <div class="flex items-center justify-between gap-3 mb-2">
        <span class="text-xs font-semibold uppercase tracking-wide text-indigo-700" data-tutorial-count></span>
        <button type="button" class="btn btn-ghost py-1 px-2" data-tutorial-skip>Omitir tutorial</button>
      </div>
      <h2 id="tutorialTitle" class="text-lg font-semibold text-slate-800" data-tutorial-title></h2>
      <p class="text-sm leading-relaxed text-slate-600 mt-2" data-tutorial-text></p>
      <div class="flex items-center justify-between gap-2 mt-5">
        <button type="button" class="btn btn-ghost" data-tutorial-prev>Anterior</button>
        <button type="button" class="btn btn-primary" data-tutorial-next></button>
      </div>
    </div>`;
    document.body.appendChild(overlay);

    const card = overlay.querySelector(".tutorial-card");
    const title = overlay.querySelector("[data-tutorial-title]");
    const text = overlay.querySelector("[data-tutorial-text]");
    const count = overlay.querySelector("[data-tutorial-count]");
    const progress = overlay.querySelector(".tutorial-progress span");
    const previous = overlay.querySelector("[data-tutorial-prev]");
    const next = overlay.querySelector("[data-tutorial-next]");

    const finish = () => {
      localStorage.setItem(TUTORIAL_KEY, "completado");
      closeTutorial();
    };

    const renderStep = () => {
      document.querySelectorAll(".tutorial-target").forEach((el) => el.classList.remove("tutorial-target"));
      document.querySelectorAll(".tutorial-target-parent").forEach((el) => el.classList.remove("tutorial-target-parent"));
      const step = TUTORIAL_STEPS[current];
      const target = step.target ? document.querySelector(step.target) : null;
      overlay.classList.toggle("tutorial-no-target", !target);
      
      if (target) {
      target.classList.add("tutorial-target");
      if (target.closest(".sidebar")) {
      document.querySelector(".sidebar")?.classList.add("tutorial-target-parent");
      }
    }
      title.textContent = step.title;
      text.textContent = step.text;
      count.textContent = `Paso ${current + 1} de ${TUTORIAL_STEPS.length}`;
      progress.style.width = `${((current + 1) / TUTORIAL_STEPS.length) * 100}%`;
      previous.disabled = current === 0;
      next.textContent = current === TUTORIAL_STEPS.length - 1 ? "Comenzar" : "Siguiente";
      card.focus();
    };

    overlay.querySelector("[data-tutorial-skip]").onclick = finish;
    previous.onclick = () => { if (current > 0) { current -= 1; renderStep(); } };
    next.onclick = () => {
      if (current === TUTORIAL_STEPS.length - 1) return finish();
      current += 1;
      renderStep();
    };
    overlay.onclick = (event) => { if (event.target === overlay) finish(); };
    renderStep();
  }

  function render() {
    if (!isUnlocked(state.view)) state.view = "catalogo";
    renderNav();
    const root = document.getElementById("view");
    const binders = {
      catalogo: [viewCatalogo, bindCatalogo],
      diario: [() => viewLibro({ esAjuste: false }), () => bindLibro(false)],
      mayor: [() => viewMayor(false), null],
      btc: [() => viewBtc(false), null],
      ajustes: [() => viewLibro({ esAjuste: true }), () => bindLibro(true)],
      mayorAj: [() => viewMayor(true), null],
      btcAj: [() => viewBtc(true), null],
      er: [viewER, null],
      bg: [viewBG, null],
    };
    const pair = binders[state.view] || binders.catalogo;
    root.innerHTML = pair[0]();
    pair[1]?.();
  }

  bindHeader();
  render();
  if (!localStorage.getItem(TUTORIAL_KEY)) openTutorial();
})();
