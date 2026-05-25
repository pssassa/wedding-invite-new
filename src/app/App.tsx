import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Heart, MapPin, Calendar, Clock, Mail, Phone, Gift, Send,
  Music, Wine, Utensils, Sparkles, ExternalLink, MessageSquareShare, CloudUpload, Upload
} from 'lucide-react';

// ── Botanical SVG decorations ────────────────────────────────────────────────
function BotanicalLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 190 C60 190 10 140 10 80 C10 30 60 10 60 10 C60 10 110 30 110 80 C110 140 60 190 60 190Z" fill="currentColor" opacity="0.4" />
      <path d="M60 190 L60 10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M60 80 C40 70 20 60 10 80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M60 100 C80 90 100 80 110 80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M60 120 C45 110 30 100 20 110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M60 60 C75 55 90 50 100 60" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function BotanicalSprig({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 270 L80 20" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M80 60 C60 50 30 40 10 50" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="25" cy="42" rx="18" ry="28" transform="rotate(-30 25 42)" fill="currentColor" opacity="0.25" />
      <path d="M80 90 C100 80 130 70 148 80" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="134" cy="72" rx="18" ry="28" transform="rotate(30 134 72)" fill="currentColor" opacity="0.25" />
      <path d="M80 130 C60 115 35 105 15 115" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="28" cy="107" rx="18" ry="28" transform="rotate(-20 28 107)" fill="currentColor" opacity="0.25" />
      <path d="M80 160 C100 148 128 140 145 148" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="133" cy="141" rx="18" ry="28" transform="rotate(20 133 141)" fill="currentColor" opacity="0.25" />
      <path d="M80 200 C68 190 50 185 38 192" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="46" cy="185" rx="14" ry="22" transform="rotate(-15 46 185)" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────
function HeartDivider({ color = '#C8D8C4' }: { color?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16" style={{ background: color }}></div>
      <Heart className="w-4 h-4" style={{ color, fill: color }} />
      <div className="h-px w-16" style={{ background: color }}></div>
    </div>
  );
}

// ── Countdown ────────────────────────────────────────────────────────────────
function Countdown() {
  const weddingDate = new Date('2026-08-12T15:00:00');

  const getTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'День', value: timeLeft.days },
    { label: 'Часы', value: timeLeft.hours },
    { label: 'Минуты', value: timeLeft.minutes },
    { label: 'Секунды', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-10">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>
            <span className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#4A4A4A]">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="font-['Inter'] text-xs tracking-widest uppercase text-[#8B7355] mt-2">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const scrollToRSVP = () => {
    document.getElementById('rsvp-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Watercolor blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#C8D8C4] rounded-full blur-[100px] opacity-25"></div>
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#D4B8D1] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#E6C2C2] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-[#E8D5C4] rounded-full blur-[100px] opacity-25"></div>
      </div>

      {/* Botanical corners */}
      <BotanicalSprig className="absolute top-0 left-0 w-36 md:w-56 h-auto text-[#C8D8C4] rotate-12 -translate-x-4 -translate-y-4 pointer-events-none" />
      <BotanicalSprig className="absolute top-0 right-0 w-36 md:w-56 h-auto text-[#D4B8D1] -rotate-12 translate-x-4 -translate-y-4 pointer-events-none scale-x-[-1]" />
      <BotanicalLeaf className="absolute bottom-10 left-8 w-16 md:w-24 h-auto text-[#E6C2C2] rotate-[20deg] pointer-events-none" />
      <BotanicalLeaf className="absolute bottom-10 right-8 w-16 md:w-24 h-auto text-[#C8D8C4] -rotate-[20deg] pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-['Inter'] text-xs md:text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-6"
        >
          Приглашаем Вас на наш праздник
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-[110px] text-[#4A4A4A] leading-[1.05] mb-4"
        >
          Павел & Алина
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <HeartDivider color="#E6C2C2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-4 mb-2"
        >
          <p className="font-['Playfair_Display'] italic text-2xl md:text-3xl text-[#6B5D52]">
            Август 15, 2026
          </p>
          <p className="font-['Inter'] text-base md:text-lg text-[#8B7355] mt-2 tracking-wide">
            Усть-Илимск, База отдыха "Лесная"
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <Countdown />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{ scale: 1.06, boxShadow: '0 12px 32px rgba(200,216,196,0.45)' }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToRSVP}
          className="mt-10 px-14 py-4 font-['Inter'] font-medium text-base rounded-xl text-white tracking-widest uppercase shadow-lg transition-all"
          style={{ background: 'linear-gradient(135deg, #C8D8C4 0%, #D4B8D1 100%)' }}
        >
          Небольшой опрос
        </motion.button>
      </motion.div>
    </section>
  );
}

// ── Our Story ────────────────────────────────────────────────────────────────
function OurStorySection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <BotanicalLeaf className="absolute top-8 right-8 w-20 h-auto text-[#E8D5C4] opacity-50 pointer-events-none rotate-45" />
      <BotanicalLeaf className="absolute bottom-8 left-8 w-20 h-auto text-[#D4B8D1] opacity-40 pointer-events-none -rotate-12" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A4A4A] mb-2">
            Наша история
          </h2>
          <HeartDivider color="#C8D8C4" />
          <p className="font-['Inter'] text-[#8B7355] text-sm tracking-widest uppercase mt-2">
            Как все начиналось
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-['Inter'] text-lg text-[#6B5D52] leading-[1.85]">
              Их первая встреча случилась в 2019 году на дне рождения общей подруги. Тогда ещё никто не мог представить, что мимолётный взгляд и пара слов станут началом большой истории. Спустя полгода, в новогоднюю ночь, они снова оказались рядом. Тот вечер прошёл в лёгкой, милой беседе, после которой Павел долго не решался написать. И лишь 12 марта 2020 года набрался смелости отправить первое сообщение. Именно с этого дня отсчитывается их путь вместе.
            </p>
            <p className="font-['Inter'] text-lg text-[#6B5D52] leading-[1.85]">
              Шесть лет они шли рука об руку. В итоге, 29 августа 2025 года, Алина без колебаний произнесла заветное «Да». Так началась новая глава их истории.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-[#E8D5C4] to-transparent"></div>
              <span className="font-['Playfair_Display'] italic text-[#D4B8D1] text-lg"> Март 2020</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.09)]translate-y-8">
              <img
                src="/wedding-invite-new/photo/photo13.jpg"
                alt="Couple Portrait 1"
                className="w-full h-72 md:h-[420px] object-cover object-[50%_70%] block rounded-2xl"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.09)] md:mt-8">
              <img
                src="/wedding-invite-new/photo/photo4.jpg"
                alt="Couple Portrait 2"
                className="w-full h-72 md:h-[420px] object-cover object-[50%_70%] block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Event Details ────────────────────────────────────────────────────────────
function EventDetailsSection() {
  const details = [
    { icon: Calendar, title: 'Дата', info: 'Суббота, \ 15 Августа 2026', accent: '#C8D8C4' },
    { icon: Clock, title: 'Время', info: 'Начало церемонии в 15:00\n', accent: '#D4B8D1' },
    { icon: MapPin, title: 'Локация', info: 'База отдыха "Лесная"\nПриморская улица, 12/3\nг. Усть-Илимск, Иркутская область, 666671', accent: '#E6C2C2' },
  ];

  return (
    <section className="py-24 px-4 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A4A4A] mb-2">
            Детали мероприятия
          </h2>
          <HeartDivider color="#D4B8D1" />
          <p className="font-['Inter'] text-[#8B7355] text-sm tracking-widest uppercase mt-2">
            Отметьте в своем календаре
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] text-center hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] transition-shadow"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                style={{ background: `${d.accent}33` }}
              >
                <d.icon className="w-7 h-7" style={{ color: d.accent === '#E6C2C2' ? '#c9a0a0' : d.accent === '#D4B8D1' ? '#b898b5' : '#90b08a' }} />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#4A4A4A] mb-3">{d.title}</h3>
              <p className="font-['Inter'] text-[#6B5D52] whitespace-pre-line leading-relaxed">{d.info}</p>
            </motion.div>
          ))}
        </div>

        {/* Dress Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.07)] mb-8 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: '#E8D5C433' }}>
            <Sparkles className="w-6 h-6 text-[#c4a882]" />
          </div>
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#4A4A4A] mb-1">Dress Code</h3>
            <p className="font-['Inter'] text-[#6B5D52]">
              Dress Code - те цвета, которые Вам нравятся и подходят, но оставьте белое и черное жениху и невесте!
            </p>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
          style={{ height: 380 }}
        >
          <div className="relative w-full h-full bg-[#E8D5C4] flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#C8D8C4' }}>
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <p className="font-['Playfair_Display'] text-xl text-[#4A4A4A]">База отдыха "Лесная"</p>
            <p className="font-['Inter'] text-sm text-[#6B5D52]">Приморская улица, 12/3, г. Усть-Илимск, Иркутская область, 666671</p>
            <a
              href="https://2gis.ru/ust-ilimsk/firm/70000001075127826/102.661326%2C57.973501?m=102.662439%2C57.973344%2F17.8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 px-6 py-2.5 rounded-lg font-['Inter'] text-sm text-white shadow transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C8D8C4, #D4B8D1)' }}
            >
              <ExternalLink className="w-4 h-4" />
              Открыть на картах
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Timeline ─────────────────────────────────────────────────────────────────
const timelineItems = [
  { time: '15:00', event: 'Церемония', description: 'Выездная регистрация на заливе', icon: Heart, accent: '#E6C2C2' },
  { time: '16:00', event: 'Кейтеринг', description: 'Напитки и вкусные закуски у воды', icon: Wine, accent: '#D4B8D1' },
  { time: '17:30', event: 'Торжественный ужин', description: 'Ужин за праздничным столом, с конкурсами, тостами и смехом ', icon: Utensils, accent: '#C8D8C4' },
  { time: '20:00', event: 'Развлечения', description: 'Веселье и танцы от заката до рассвета', icon: Music, accent: '#E8D5C4' },
];

function TimelineSection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <BotanicalSprig className="absolute -bottom-10 right-0 w-32 h-auto text-[#C8D8C4] opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A4A4A] mb-2">
            Расписание дня
          </h2>
          <HeartDivider color="#E8D5C4" />
          <p className="font-['Inter'] text-[#8B7355] text-sm tracking-widest uppercase mt-2">
            Обзор дня
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[88px] md:left-[104px] top-6 bottom-6 w-px bg-gradient-to-b from-[#C8D8C4] via-[#D4B8D1] to-[#E6C2C2]"></div>

          <div className="space-y-10">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex items-start gap-6"
              >
                {/* Time */}
                <div className="flex-shrink-0 w-20 md:w-24 text-right pt-3">
                  <p className="font-['Inter'] text-sm font-medium text-[#8B7355] leading-tight">
                    {item.time}
                  </p>
                </div>

                {/* Icon dot */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-sm"
                  style={{ background: `${item.accent}55` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.accent === '#E6C2C2' ? '#c99a9a' : item.accent === '#D4B8D1' ? '#b08eae' : item.accent === '#C8D8C4' ? '#7aab72' : '#c4a882' }} fill={item.accent === '#E6C2C2' ? '#c99a9a' : 'none'} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#F5F0EB] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="font-['Playfair_Display'] text-xl text-[#4A4A4A] mb-1">{item.event}</h3>
                  <p className="font-['Inter'] text-sm text-[#6B5D52] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── RSVP Form ────────────────────────────────────────────────────────────────
function RSVPFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    mealPreference: 'chicken',
    alcoholPreferences: [] as string[],
    dietaryNotes: '',
    guestMusic: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // 👇 ВСТАВЬ СЮДА СВОЙ URL ИЗ GOOGLE APPS SCRIPT
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLS2GS2GOJRb-YUFS3FRGWTd-ASg2bPWa8OY9WtU81dc3d5T53ZKlhMYBUENVHP5SFYA/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Обязательно для Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // При mode: 'no-cors' ответ не читаем, но данные уходят
      setSubmitted(true);
      setFormData({
        name: '',
        attendance: 'yes',
        mealPreference: 'chicken',
        alcoholPreferences: [] as string[],
        dietaryNotes: '',
        guestMusic: '',
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Произошла ошибка при отправке. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="py-24 px-4 bg-[#F5F0EB] relative overflow-hidden">
      <BotanicalLeaf className="absolute top-12 left-6 w-16 h-auto text-[#D4B8D1] opacity-40 pointer-events-none rotate-[30deg]" />
      <BotanicalLeaf className="absolute bottom-12 right-6 w-16 h-auto text-[#C8D8C4] opacity-40 pointer-events-none -rotate-[30deg]" />

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A4A4A] mb-2">Форма обратной связи</h2>
          <HeartDivider color="#C8D8C4" />
          <p className="font-['Inter'] text-[#8B7355] mt-2">Просьба заполнить до 25 июня 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ background: '#C8D8C433' }}>
                <Heart className="w-8 h-8 text-[#E6C2C2]" fill="#E6C2C2" />
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl text-[#4A4A4A] mb-3">Спасибо!</h3>
              <p className="font-['Inter'] text-[#6B5D52]">
                Мы получили Ваш ответ! 
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="font-['Inter'] text-sm font-medium text-[#4A4A4A] mb-2 block">
                  Ваши фамилия и имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D5C4] focus:border-[#C8D8C4] focus:outline-none transition-colors font-['Inter'] bg-[#fdfaf8]"
                  placeholder="Введите Вашу фамилию и имя"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="font-['Inter'] text-sm font-medium text-[#4A4A4A] mb-3 block">
                  Вы будете присутствовать? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'Обязательно буду' },
                    { value: 'no', label: 'К сожалению не смогу' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all font-['Inter'] text-sm ${
                        formData.attendance === opt.value
                          ? 'border-[#C8D8C4] bg-[#C8D8C4]/20 text-[#4A4A4A]'
                          : 'border-[#E8D5C4] text-[#8B7355]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={opt.value}
                        checked={formData.attendance === opt.value}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="sr-only"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {formData.attendance === 'yes' && (
                <>

                  {/* Meal Preference */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-[#4A4A4A] mb-3 block">
                      Основное блюдо *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'Chicken', label: 'Курица' },
                        { value: 'Beef/Pork', label: 'Говядина/Свинина' },
                        { value: 'Fish', label: 'Рыба' },
                        { value: 'Vegan', label: 'Вегетерианец' },
                      ].map((meal) => (
                        <label
                          key={meal.value}
                          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all font-['Inter'] text-sm capitalize ${
                            formData.mealPreference === meal.value
                              ? 'border-[#D4B8D1] bg-[#D4B8D1]/20 text-[#4A4A4A]'
                              : 'border-[#E8D5C4] text-[#8B7355]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="meal"
                            value={meal.value}
                            checked={formData.mealPreference === meal.value}
                            onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                            className="sr-only"
                          />
                          {meal.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Alcohol Preferences - Multiple Select */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-[#4A4A4A] mb-3 block">
                      Алкоголь *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'Red wine', label: 'Красное вино' },
                        { value: 'White wine', label: 'Белое Вино' },
                        { value: 'Champange', label: 'Шампанское' },
                        { value: 'Martini', label: 'Мартини' },
                        { value: 'Whiskey', label: 'Виски' },
                        { value: 'Vodka', label: 'Водка' },
                        { value: 'Gin', label: 'Джин' },
                        { value: 'Cognac', label: 'Коньяк' },
                        { value: 'Tekila', label: 'Текила' },
                        { value: 'Not alcohol', label: 'Безалкогольное' },
                      ].map((drink) => {
                        // Проверяем, выбран ли этот напиток (массив включает значение)
                        const isChecked = formData.alcoholPreferences?.includes(drink.value) || false;
                        
                        return (
                          <label
                            key={drink.value}
                            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all font-['Inter'] text-sm capitalize ${
                              isChecked
                                ? 'border-[#D4B8D1] bg-[#D4B8D1]/20 text-[#4A4A4A]'
                                : 'border-[#E8D5C4] text-[#8B7355]'
                            }`}
                          >
                            <input
                              type="checkbox"  // 👈 Чекбокс вместо радио
                              name="alcohol"
                              value={drink.value}
                              checked={isChecked}
                              onChange={(e) => {
                                const current = formData.alcoholPreferences || [];
                                if (e.target.checked) {
                                  // Добавляем напиток в массив
                                  setFormData({ ...formData, alcoholPreferences: [...current, drink.value] });
                                } else {
                                  // Удаляем напиток из массива
                                  setFormData({ 
                                    ...formData, 
                                    alcoholPreferences: current.filter((v) => v !== drink.value) 
                                  });
                                }
                              }}
                              className="sr-only"
                            />
                            {drink.label}
                          </label>
                        );
                      })}
                    </div>
                    
                    {/* Подсказка, если ничего не выбрано */}
                    {(!formData.alcoholPreferences || formData.alcoholPreferences.length === 0) && (
                      <p className="text-[10px] text-[#8B7355]/70 mt-1.5 text-center">
                        Выберите один или несколько вариантов
                      </p>
                    )}
                  </div>

                  {/* Dietary Notes */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-[#4A4A4A] mb-2 block">
                      Диетические ограничения или примечания
                    </label>
                    <textarea
                      value={formData.dietaryNotes}
                      onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D5C4] focus:border-[#C8D8C4] focus:outline-none transition-colors font-['Inter'] resize-none bg-[#fdfaf8]"
                      rows={3}
                      placeholder="Если у вас есть аллергии, особые диетические предпочтения или вы просто хотите нам что то сообщить!"
                    />
                  </div>

                  {/* Guest Music */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-[#4A4A4A] mb-2 block">
                      Какую музыку хотели бы услышать?
                    </label>
                    <textarea
                      value={formData.guestMusic}
                      onChange={(e) => setFormData({ ...formData, guestMusic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D5C4] focus:border-[#C8D8C4] focus:outline-none transition-colors font-['Inter'] resize-none bg-[#fdfaf8]"
                      rows={3}
                      placeholder="Напишите названия песен или исполнителей, которые хоетли бы услышать"
                    />
                  </div>

                </>
              )}

              {/* Сообщение об ошибке */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
                  {submitError}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 font-['Inter'] font-medium text-base rounded-xl text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                style={{ background: 'linear-gradient(135deg, #C8D8C4 0%, #D4B8D1 100%)' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <MessageSquareShare className="w-4 h-4" />
                    Отправить форму
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ── Photo Gallery ─────────────────────────────────────────────────────────────
const galleryPhotos = [
  { src: '/wedding-invite-new/photo/photo8.jpg', span: 'col-span-1 row-span-2', alt: 'Wedding flowers' },
  { src: '/wedding-invite-new/photo/photo2.jpg', alt: 'Venue decoration' },
  { src: '/wedding-invite-new/photo/photo14.jpg', span: 'col-span-1 row-span-1', alt: 'Couple portrait' },
  { src: '/wedding-invite-new/photo/photo18.jpg', span: 'col-span-1 row-span-2', alt: 'Floral arrangement' },
  { src: '/wedding-invite-new/photo/photo7.jpg', span: 'col-span-1 row-span-1', alt: 'Romantic photo' },
  { src: '/wedding-invite-new/photo/photo9.jpg', span: 'col-span-1 row-span-1', alt: 'Venue floral decor' },
  { src: '/wedding-invite-new/photo/photo6.jpg', span: 'col-span-1 row-span-1', alt: 'Venue floral decor' },
];

function PhotoGallerySection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A4A4A] mb-2">
            Наши фото
          </h2>
          <HeartDivider color="#E6C2C2" />
          <p className="font-['Inter'] text-[#8B7355] text-sm tracking-widest uppercase mt-2"></p>
        </motion.div>

        {/* Desktop masonry-style grid */}
        <div
          className="hidden md:grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '220px' }}
        >
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative ${photo.span} overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.09)] group cursor-pointer`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A4A4A]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile 2-column grid */}
        <div className="grid md:hidden grid-cols-2 gap-3">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.09)] aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function FooterSection() {
  return (
    <footer className="py-20 px-4 bg-[#F5F0EB] relative overflow-hidden">
      <BotanicalSprig className="absolute top-0 left-0 w-28 h-auto text-[#D4B8D1] opacity-30 pointer-events-none -translate-y-4" />
      <BotanicalSprig className="absolute top-0 right-0 w-28 h-auto text-[#C8D8C4] opacity-30 pointer-events-none -translate-y-4 scale-x-[-1]" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#4A4A4A] mb-2">
            Павел & Алина
          </h3>
          <p className="font-['Playfair_Display'] italic text-[#8B7355] text-lg mb-8">Август 15, 2026</p>

          <HeartDivider color="#D4B8D1" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 mb-10">
          
            {/* 📧 Email блок */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 font-['Inter'] text-[#6B5D52] mb-1">
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email:</span>
              </div>
              <a
                href="mailto:psassa2013@@yandex.ru"
                className="text-[#6B5D52] hover:text-[#C8D8C4] transition-colors text-sm"
              >
                psassa2013@@yandex.ru — Павел
              </a>
              <a
                href="mailto:lina.telnova.01@mail.ru"
                className="text-[#6B5D52] hover:text-[#C8D8C4] transition-colors text-sm"
              >
                lina.telnova.01@mail.ru — Алина
              </a>
            </div>

            {/* 📞 Телефон блок */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 font-['Inter'] text-[#6B5D52] mb-1">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Телефон:</span>
              </div>
              <a
                href="tel:+79526166916"
                className="text-[#6B5D52] hover:text-[#D4B8D1] transition-colors text-sm"
              >
                +7 (952) 616-69-16 — Павел
              </a>
              <a
                href="tel:+79501086025"
                className="text-[#6B5D52] hover:text-[#D4B8D1] transition-colors text-sm"
              >
                +7 (950) 108-60-25 — Алина
              </a>
            </div>

            {/* ✈️ Telegram блок */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 font-['Inter'] text-[#6B5D52] mb-1">
                <Send className="w-4 h-4" />
                <span className="font-medium">Telegram:</span>
              </div>
              <a
                href="https://t.me/psasssa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B5D52] hover:text-[#E6C2C2] transition-colors text-sm"
              >
                @psasssa — Павел
              </a>
              <a
                href="https://t.me/lina_telnova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B5D52] hover:text-[#E6C2C2] transition-colors text-sm"
              >
                @lina_telnova — Алина
              </a>
            </div>
          </div>

          {/* Photo Upload Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" 
                  style={{ background: '#D4B8D133' }}>
                <CloudUpload className="w-6 h-6 text-[#D4B8D1]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-['Playfair_Display'] text-xl text-[#4A4A4A] mb-1">
                  Ваши фото с праздника
                </h3>
                <p className="font-['Inter'] text-[#6B5D52] text-sm mb-3">
                  Делитесь моментами! Загружайте фото и видео в наше общее облако — соберём красивую память вместе.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1t5G3IJCDgJ6H0CyddmCsVx_DX0094att?usp=sharing"  // 👇 Замени на свою ссылку
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm transition-all hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, #C8D8C4 0%, #D4B8D1 100%)' }}
                >
                  <Upload className="w-4 h-4" />
                  Загрузить фото
                </a>
                <p className="font-['Inter'] text-[10px] text-[#8B7355]/70 mt-2">
                  Доступно для всех гостей • Без регистрации
                </p>
              </div>
            </div>
          </motion.div>

          <div className="bg-white rounded-2xl p-6 mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.07)] max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-[#D4B8D1]" />
              <h4 className="font-['Playfair_Display'] text-xl text-[#4A4A4A]">Будем рады денежным подаркам</h4>
            </div>
          </div>

          <p className="font-['Inter'] text-xs text-[#8B7355] tracking-widest uppercase">
            © 2026 Павел & Алина · Сделано с любовью
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="w-full bg-[#F5F0EB] overflow-x-hidden">
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      <TimelineSection />
      <RSVPFormSection />
      <PhotoGallerySection />
      <FooterSection />
    </div>
  );
}
