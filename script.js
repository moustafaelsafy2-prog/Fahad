// ===== Mobile nav =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const shown = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
  });
}

// ===== Smooth scroll for CTA buttons =====
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Simple project filter =====
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project-card');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const t = chip.dataset.filter;
  cards.forEach(card => {
    card.style.display = (t === 'all' || card.dataset.type === t) ? '' : 'none';
  });
}));

// ===== Lead Form -> WhatsApp + mailto fallback =====
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    // Basic validation
    const required = ['name', 'phone', 'email', 'type', 'city'];
    if (!required.every(k => (data[k] || '').trim())) {
      alert(currentDict.form.err || 'Please fill required fields'); return;
    }

    const lang = document.documentElement.lang;
    const labels = {
      ar: { q: 'طلب عرض سعر', n:'الاسم', ph:'الهاتف', em:'البريد', t:'النوع', c:'المدينة', b:'الميزانية', d:'التفاصيل' },
      en: { q: 'Quote Request', n:'Name', ph:'Phone', em:'Email', t:'Type', c:'City', b:'Budget', d:'Details' }
    }[lang];

    const msg =
`${labels.q}
${labels.n}: ${data.name}
${labels.ph}: ${data.phone}
${labels.em}: ${data.email}
${labels.t}: ${data.type}
${labels.c}: ${data.city}
${labels.b}: ${data.budget||'-'}
${labels.d}: ${data.details||'-'}`;

    // WhatsApp
    const wa = `https://wa.me/971502402894?text=${encodeURIComponent(msg)}`;
    window.open(wa, '_blank');

    // Email fallback
    const subject = encodeURIComponent(labels.q + ' - website');
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:Newcastles.ae@gmail.com?subject=${subject}&body=${body}`;

    form.reset();
  });
}

// ===== i18n (AR/EN) with direction + meta switching =====
const dict = {
  ar: {
    metaTitle: "New Castle | مقاولات وصيانة في أبوظبي منذ 2008",
    metaDesc: "مقاولات عامة وصيانة في أبوظبي — حلول متكاملة من التصميم حتى التسليم، بأعلى معايير السلامة والجودة. Since 2008.",
    nav:{home:"الرئيسية",about:"من نحن",services:"الخدمات",projects:"المشاريع",partners:"الشركاء",qhse:"الجودة والاستدامة",careers:"التوظيف",insights:"المدونة",contact:"تواصل"},
    hero:{title:"نبني الثقة ونسلّم الجودة منذ 2008",subtitle:"مقاولات عامة وصيانة في أبوظبي — حلول متكاملة من التصميم حتى التسليم، بأعلى معايير السلامة والجودة."},
    values:{v1:"خبرة موثوقة",v2:"تسليم في الوقت",v3:"جودة بلا تنازل",v4:"سلامة أولاً",v5:"تنسيق شفاف"},
    about:{title:"من نحن",body:"تأسست نيو كاسل عام 2008 لتقديم حلول إنشائية وصيانة عالية الاعتمادية للقطاعات السكنية والتجارية والصناعية في أبوظبي، عبر فريق محترف وشراكات هندسية راسخة.",
      sectors:{r:"سكني",c:"تجاري",i:"صناعي"},
      vision:{h:"الرؤية",p:"قيادة موثوقة في الإنشاءات والصيانة مع الابتكار والجودة."},
      mission:{h:"الرسالة",p:"حلول تعاقدية فعّالة من حيث التكلفة، في الوقت، مستدامة، وتتجاوز التوقعات."},
      values:{h:"القيم",v1:"النزاهة والشفافية",v2:"الالتزام بالجودة",v3:"التسليم في الوقت",v4:"السلامة أولاً",v5:"رضا العملاء"}
    },
    services:{title:"الخدمات",
      s1:{h:"المقاولات العامة",p:"تنفيذ كامل لفلل/مكاتب/مخازن من الأساسات حتى التسليم."},
      s2:{h:"الصيانة والتجديد",p:"خطط صيانة وقائية/تصحيحية وتجديد شامل."},
      s3:{h:"الطرق والبنية التحتية",p:"حفريات وتمديدات وطبقات وتصريف."},
      s4:{h:"مرافق النفط والغاز",p:"مدني/كهرباء/ميكانيك وفق اشتراطات السلامة."},
      s5:{h:"التشطيبات والديكور",p:"تصميم وتنفيذ تشطيبات راقية للسكني/التجاري."}
    },
    projects:{title:"المشاريع",cta:"عرض دراسة حالة",
      items:{
        mbz:{title:"فيلا سكنية – مدينة محمد بن زايد",meta:"الاستشاري: Al Itqan"},
        w25:{title:"مجلس خارجي وتمديد غرفة – West 25",meta:"الاستشاري: Eastern Architecture"},
        bahia:{title:"فيلا – الباهية",meta:"الاستشاري: Al Khail"},
        m36:{title:"مبنى مكاتب ومحلات – M36",meta:"الاستشاري: Dar Al-Handasah"}
      }
    },
    partners:{title:"شركاء النجاح"},
    qhse:{title:"الجودة والسلامة والاستدامة",b1:"سلامة أولاً عبر أنظمة وإجراءات ميدانية معتمدة.",
      b2:"رقابة جودة صارمة من التخطيط حتى التسليم.",
      b3:"شفافية وتقارير دورية وتنسيق كامل مع العميل.",
      b4:"مسؤولية بيئية وممارسات مستدامة."
    },
    quote:{title:"اطلب عرض سعر"},
    form:{
      name:"الاسم الكامل", phone:"رقم الهاتف (UAE)", email:"البريد الإلكتروني", type:"نوع المشروع",
      city:"المدينة", budget:"الميزانية التقريبية", details:"وصف مختصر", files:"ملفات/رسومات (اختياري)", submit:"إرسال الطلب",
      note:"يرسل الطلب إلى البريد ويُنشئ رسالة واتساب تلقائياً. محمي بـ reCAPTCHA (للتهيئة لاحقاً).",
      types:{villa:"فيلا",office:"مكتب",wh:"مستودع",renov:"تجديد/صيانة",infra:"بنية تحتية"},
      err:"يرجى تعبئة الحقول المطلوبة."
    },
    careers:{title:"التوظيف",body:"نبحث عن مهندسين ومشرفين وفنيين متميزين. أرسل السيرة إلى البريد مع عنوان الوظيفة.",cta:"إرسال السيرة",
      b1:"بيئة آمنة تركّز على الجودة.",b2:"تطوير مهني وفرص قيادة.",b3:"مشاريع متنوعة: سكني/تجاري/صناعي."
    },
    insights:{title:"المدونة",p1:"كيف نضمن التسليم في الوقت؟ منهجية إدارة المشاريع لدينا.",p2:"سلامة الموقع أولاً: إجراءاتنا الميدانية.",p3:"تجديد فلل فاخرة: قبل/بعد."},
    contact:{title:"تواصل معنا",addressLabel:"العنوان:",phoneLabel:"الهاتف:",address:"UAE, Abu Dhabi"},
    footer:{since:"Since 2008"},
    cta:{quote:"اطلب عرض سعر",contact:"تواصل الآن",whatsapp:"واتساب"},
    filters:{all:"الكل",res:"سكني",com:"تجاري",ind:"صناعي"}
  },
  en: {
    metaTitle:"New Castle | Contracting & Maintenance in Abu Dhabi since 2008",
    metaDesc:"Integrated contracting & maintenance in Abu Dhabi—from design to handover with uncompromising safety and quality. Since 2008.",
    nav:{home:"Home",about:"About",services:"Services",projects:"Projects",partners:"Partners",qhse:"QHSE & Sustainability",careers:"Careers",insights:"Insights",contact:"Contact"},
    hero:{title:"Building Trust, Delivering Quality Since 2008",subtitle:"Integrated contracting & maintenance in Abu Dhabi—from design to handover with uncompromising safety and quality."},
    values:{v1:"Trusted Experience",v2:"On-Time Delivery",v3:"Uncompromising Quality",v4:"Safety First",v5:"Transparent Coordination"},
    about:{title:"About Us",body:"Established in 2008, New Castle delivers reliable construction and maintenance solutions across residential, commercial, and industrial sectors in Abu Dhabi, powered by a professional team and strong engineering partnerships.",
      sectors:{r:"Residential",c:"Commercial",i:"Industrial"},
      vision:{h:"Vision",p:"Trusted leadership in construction & maintenance with innovation and quality."},
      mission:{h:"Mission",p:"Cost-effective, on-time, sustainable contracting solutions that exceed expectations."},
      values:{h:"Values",v1:"Integrity & Transparency",v2:"Commitment to Quality",v3:"On-Time Delivery",v4:"Safety First",v5:"Customer Satisfaction"}
    },
    services:{title:"Services",
      s1:{h:"General Contracting",p:"End-to-end delivery for villas/offices/warehouses."},
      s2:{h:"Building Maintenance & Renovation",p:"Preventive/corrective plans and full renovations."},
      s3:{h:"Roads & Infrastructure Works",p:"Excavation, utilities, layers, and drainage."},
      s4:{h:"Oil & Gas Facilities Services",p:"Civil/Electrical/Mechanical to strict safety standards."},
      s5:{h:"Fit-Out & Specialized Works (Décor)",p:"High-end finishes for residential & commercial spaces."}
    },
    projects:{title:"Projects",cta:"View Case Study",
      items:{
        mbz:{title:"Residential Villa – MBZ City",meta:"Consultant: Al Itqan"},
        w25:{title:"Outdoor Majlis & Bedroom Extension – West 25",meta:"Eastern Architecture"},
        bahia:{title:"Villa – Al Bahia",meta:"Consultant: Al Khail"},
        m36:{title:"Office Building & Shops – Area M36",meta:"Dar Al-Handasah"}
      }
    },
    partners:{title:"Partners"},
    qhse:{title:"QHSE & Sustainability",b1:"Safety first via field-tested procedures.",b2:"Strict quality control from design to handover.",b3:"Transparent reporting and full client coordination.",b4:"Environmental responsibility and sustainable practices."},
    quote:{title:"Get a Quote"},
    form:{
      name:"Full Name", phone:"Phone (UAE)", email:"Email", type:"Project Type",
      city:"City", budget:"Estimated Budget", details:"Brief Details", files:"Files/Drawings (optional)", submit:"Submit Request",
      note:"We’ll send your request by email and open WhatsApp automatically. reCAPTCHA to be configured.",
      types:{villa:"Villa",office:"Office",wh:"Warehouse",renov:"Renovation/Maintenance",infra:"Infrastructure"},
      err:"Please fill required fields."
    },
    careers:{title:"Careers",body:"We hire outstanding engineers, supervisors, and technicians. Email your CV with the job title.",cta:"Send your CV",
      b1:"Safe, quality-focused environment.",b2:"Professional development & leadership opportunities.",b3:"Diverse projects: residential/commercial/industrial."
    },
    insights:{title:"Insights",p1:"How we deliver on-time: our PM methodology.",p2:"Site safety first: our field procedures.",p3:"Luxury villa renovations: before & after."},
    contact:{title:"Contact Us",addressLabel:"Address:",phoneLabel:"Phone:",address:"UAE, Abu Dhabi"},
    footer:{since:"Since 2008"},
    cta:{quote:"Get a Quote",contact:"Contact Us",whatsapp:"WhatsApp"},
    filters:{all:"All",res:"Residential",com:"Commercial",ind:"Industrial"}
  }
};

let currentDict = dict.ar;

function applyI18n(lang='ar'){
  currentDict = dict[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Swap meta
  document.title = currentDict.metaTitle;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', currentDict.metaDesc);

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.dataset.i18n.split('.');
    let val = currentDict;
    path.forEach(k=>{ if (val) val = val[k]; });
    if (typeof val === 'string') el.textContent = val;
  });

  // Update placeholders if any custom ones are needed (kept minimal)
}
applyI18n('ar');

// Language switch
document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    applyI18n(btn.dataset.lang);
  });
});

// Accessibility: close menu on link click (mobile)
document.querySelectorAll('#navMenu a').forEach(a=>{
  a.addEventListener('click', ()=> navMenu.classList.remove('show'));
});
