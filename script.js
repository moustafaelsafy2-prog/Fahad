// ===== i18n =====
const dict = {
  ar: {
    nav:{home:"الرئيسية",about:"من نحن",services:"الخدمات",projects:"المشاريع",qhse:"الجودة والاستدامة",contact:"تواصل"},
    hero:{title:"نبني الثقة ونسلّم الجودة منذ 2008",subtitle:"مقاولات عامة وصيانة في أبوظبي — حلول متكاملة من التصميم حتى التسليم، بأعلى معايير السلامة والجودة."},
    values:["خبرة موثوقة","تسليم في الوقت","جودة بلا تنازل","سلامة أولاً","تنسيق شفاف"],
    about:{title:"من نحن",body:"تأسست القصور الحديثة عام 2008 لتقديم حلول إنشائية وصيانة عالية الاعتمادية للقطاعات السكنية والتجارية والصناعية في أبوظبي، عبر فريق محترف وشراكات هندسية راسخة.",sectors:{r:"سكني",c:"تجاري",i:"صناعي"},vision:{h:"الرؤية",p:"قيادة موثوقة في الإنشاءات والصيانة مع الابتكار والجودة."},mission:{h:"الرسالة",p:"حلول تعاقدية فعّالة من حيث التكلفة، في الوقت، مستدامة، وتتجاوز التوقعات."},values:{h:"القيم",v1:"النزاهة والشفافية",v2:"الالتزام بالجودة",v3:"التسليم في الوقت",v4:"السلامة أولاً",v5:"رضا العملاء"}},
    services:{title:"الخدمات",s1:{h:"المقاولات العامة",p:"تنفيذ كامل لفلل/مكاتب/مخازن من الأساسات حتى التسليم."},s2:{h:"الصيانة والتجديد",p:"خطط صيانة وقائية/تصحيحية وتجديد شامل."},s3:{h:"الطرق والبنية التحتية",p:"أعمال بنية تحتية وهياكل وجسور."},s4:{h:"مرافق صناعية",p:"مدني/كهربائي/ميكانيكي بمعايير سلامة صارمة."},s5:{h:"التشطيبات والديكور",p:"تشطيبات راقية للمساحات السكنية والتجارية."}},
    projects:{title:"المشاريع",cta:"عرض دراسة حالة",items:{mbz:{title:"فيلا سكنية – مدينة محمد بن زايد",meta:"الاستشاري: Al Itqan"},w25:{title:"مجلس خارجي وتمديد غرفة – West 25",meta:"الاستشاري: Eastern Architecture"},bahia:{title:"فيلا – الباهية",meta:"الاستشاري: Al Khail"},m36:{title:"مبنى مكاتب ومحلات – M36",meta:"الاستشاري: Dar Al-Handasah"}}},
    qhse:{title:"الجودة والسلامة والاستدامة",b1:"سلامة أولاً عبر إجراءات ميدانية معتمدة.",b2:"رقابة جودة صارمة من التصميم حتى التسليم.",b3:"تقارير شفافة وتنسيق كامل مع العميل.",b4:"مسؤولية بيئية وممارسات مستدامة."},
    quote:{title:"اطلب عرض سعر"},
    form:{name:"الاسم الكامل",phone:"رقم الهاتف (UAE)",email:"البريد الإلكتروني",type:"نوع المشروع",city:"المدينة",budget:"الميزانية التقريبية",details:"وصف مختصر",submit:"إرسال الطلب",note:"نرسل الطلب إلى البريد ونفتح واتساب تلقائيًا. (reCAPTCHA لاحقًا)",types:{villa:"فيلا",office:"مكتب",wh:"مستودع",renov:"تجديد/صيانة",infra:"بنية تحتية"},err:"يرجى تعبئة الحقول المطلوبة."},
    contact:{title:"تواصل معنا",addressLabel:"العنوان:",phoneLabel:"الهاتف:",address:"UAE, Abu Dhabi"},
    footer:{since:"Since 2008"},
    cta:{quote:"اطلب عرض سعر",contact:"تواصل الآن",whatsapp:"واتساب"},
    filters:{all:"الكل",res:"سكني",com:"تجاري"}
  },
  en: {
    nav:{home:"Home",about:"About",services:"Services",projects:"Projects",qhse:"QHSE & Sustainability",contact:"Contact"},
    hero:{title:"Building Trust, Delivering Quality Since 2008",subtitle:"Integrated contracting & maintenance in Abu Dhabi—from design to handover with uncompromising safety and quality."},
    values:["Trusted Experience","On-Time Delivery","Uncompromising Quality","Safety First","Transparent Coordination"],
    about:{title:"About Us",body:"Established in 2008, New Castle delivers reliable construction and maintenance solutions across residential, commercial, and industrial sectors in Abu Dhabi, powered by a professional team and strong engineering partnerships.",sectors:{r:"Residential",c:"Commercial",i:"Industrial"},vision:{h:"Vision",p:"Trusted leadership in construction & maintenance with innovation and quality."},mission:{h:"Mission",p:"Cost-effective, on-time, sustainable contracting solutions that exceed expectations."},values:{h:"Values",v1:"Integrity & Transparency",v2:"Commitment to Quality",v3:"On-Time Delivery",v4:"Safety First",v5:"Customer Satisfaction"}},
    services:{title:"Services",s1:{h:"General Contracting",p:"End-to-end delivery for villas/offices/warehouses."},s2:{h:"Maintenance & Renovation",p:"Preventive/corrective plans and full renovations."},s3:{h:"Roads & Infrastructure",p:"Infrastructure works and bridges."},s4:{h:"Industrial Facilities",p:"Civil/Electrical/Mechanical to strict safety standards."},s5:{h:"Fit-Out & Décor",p:"High-end finishes for residential & commercial."}},
    projects:{title:"Projects",cta:"View Case Study",items:{mbz:{title:"Residential Villa – MBZ City",meta:"Consultant: Al Itqan"},w25:{title:"Outdoor Majlis & Bedroom Extension – West 25",meta:"Eastern Architecture"},bahia:{title:"Villa – Al Bahia",meta:"Consultant: Al Khail"},m36:{title:"Office Building & Shops – Area M36",meta:"Dar Al-Handasah"}}},
    qhse:{title:"QHSE & Sustainability",b1:"Safety first via field procedures.",b2:"Strict quality control from design to handover.",b3:"Transparent reporting and coordination.",b4:"Environmental responsibility."},
    quote:{title:"Get a Quote"},
    form:{name:"Full Name",phone:"Phone (UAE)",email:"Email",type:"Project Type",city:"City",budget:"Estimated Budget",details:"Brief Details",submit:"Submit Request",note:"We’ll send your request by email and open WhatsApp automatically. reCAPTCHA later.",types:{villa:"Villa",office:"Office",wh:"Warehouse",renov:"Renovation/Maintenance",infra:"Infrastructure"},err:"Please fill required fields."},
    contact:{title:"Contact Us",addressLabel:"Address:",phoneLabel:"Phone:",address:"UAE, Abu Dhabi"},
    footer:{since:"Since 2008"},
    cta:{quote:"Get a Quote",contact:"Contact Us",whatsapp:"WhatsApp"},
    filters:{all:"All",res:"Residential",com:"Commercial"}
  }
};

let current = dict.ar;

function applyI18n(lang='ar'){
  current = dict[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang==='ar')?'rtl':'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.dataset.i18n.split('.');
    let v = current; path.forEach(k=>{ if(v) v = v[k]; });
    if(typeof v === 'string') el.textContent = v;
  });

  const vp = document.getElementById('vp');
  if(vp){ vp.innerHTML=''; (current.values||[]).forEach(t=>{
    const li = document.createElement('li'); li.innerHTML = `<span>✓</span><span>${t}</span>`; vp.appendChild(li);
  });}
}

document.addEventListener('DOMContentLoaded',()=>{
  // mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('navMenu');
  if(navToggle){ navToggle.addEventListener('click',()=> navMenu.classList.toggle('show')); }

  // language switching
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); applyI18n(btn.dataset.lang);
    });
  });

  // project filters
  const chips = document.querySelectorAll('.chip'); const cards = document.querySelectorAll('.project-card');
  chips.forEach(ch=> ch.addEventListener('click',()=>{
    chips.forEach(c=>c.classList.remove('active')); ch.classList.add('active');
    const f = ch.dataset.filter; cards.forEach(cd=> cd.style.display = (f==='all'||cd.dataset.type===f)?'':'none';
  )});

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id = a.getAttribute('href');
      if(id && id.startsWith('#')){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // lead form
  const form = document.getElementById('leadForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fd = new FormData(form); const data = Object.fromEntries(fd.entries());
      const required = ['name','phone','email','type','city'];
      if(!required.every(k => (data[k]||'').trim())){ alert(current.form.err); return; }
      const l = (document.documentElement.lang==='ar')
        ? {q:'طلب عرض سعر',n:'الاسم',ph:'الهاتف',em:'البريد',t:'النوع',c:'المدينة',b:'الميزانية',d:'التفاصيل'}
        : {q:'Quote Request',n:'Name',ph:'Phone',em:'Email',t:'Type',c:'City',b:'Budget',d:'Details'};
      const msg = `${l.q}\n${l.n}: ${data.name}\n${l.ph}: ${data.phone}\n${l.em}: ${data.email}\n${l.t}: ${data.type}\n${l.c}: ${data.city}\n${l.b}: ${data.budget||'-'}\n${l.d}: ${data.details||'-'}`;
      window.open(`https://wa.me/971502402894?text=${encodeURIComponent(msg)}`,'_blank');
      window.location.href = `mailto:Newcastles.ae@gmail.com?subject=${encodeURIComponent(l.q+' - website')}&body=${encodeURIComponent(msg)}`;
      form.reset();
    });
  }

  // init
  applyI18n('ar');
});
