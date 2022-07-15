import Like from './Cards/icon.svg'
import Target from './Cards/secondIcon.svg'
import Warranty from './Cards/thirdIconsvg.svg'

import Phone from './Repair/Rectangle 21.png'
import Tablet from './Repair/Rectangle 23.png'
import LapTop from './Repair/Rectangle 26.png'
import Console from './Repair/Rectangle 27.png'
import graphicsCard from './Repair/Rectangle 30.png'
import Tv from './Repair/Rectangle 31.png'

import CareTime from './Care/иконка - время.png'
import CareMoney from './Care/иконка - деньги.png'
import CarePhone from './Care/иконка - телефон.png'

import PersonTeam from './Team/team.png'

import Avatar1 from './Reviews/Ellipse 1.png'
import Avatar2 from './Reviews/Ellipse 2.png'
import Avatar4 from './Reviews/Ellipse 4.png'
import Avatar5 from './Reviews/Ellipse 5.png'

import protect1 from './ProtectCard/Rectangle 65.png'
import protect2 from './ProtectCard/Rectangle 65.png'

import Brands1 from './Brand/Rectangle 89.png'
import Brands2 from './Brand/Rectangle 74.png'
import Brands3 from './Brand/Rectangle 87.png'
import Brands4 from './Brand/Rectangle 90.png'
import Brands5 from './Brand/Rectangle 95.png'
import Brands6 from './Brand/Rectangle 93.png'

import accum from './Repair/RepairCustom/accum.svg'
import charge from './Repair/RepairCustom/charge.svg'
import display from './Repair/RepairCustom/display.svg'
import diagnostik from './Repair/RepairCustom/diagnostik.svg'

let state = {
  HeaderInfo : {
    MainPage : {
      textHeader:'Добрый сервис по ремонту электроники',
      textDesc :'Профессионально ремонтируем любую электронную технику в городе Сургут от 10 минут',
    },
    Services : {
      textHeader:'Чиним 90% поломок у 90% смартфонов',
      textDesc :'Отремонтируем любой смартфон от 5 минут с бессрочной гарантией на работу',
    },
    Counter : 33600,
  },
  CardInfo : [
    {id:0, header:'Большой опыт', text:'компания WoodyService основана в 2013 году', img:Like},
    {id:1, header:'Наша цель', text:'стать лучшим сервисным центром в XMAO', img:Target},
    {id:2, header:'Бессрочная гаррантия', text:'каждому клиенту на любой вид техники', img:Warranty},
  ],
  RepairInfo : [
    {id:0, header:'Мобильные устройства', text:'Ремонтируем любые бренды смартфонов: iPhone, Samsung, Xiaomi, Huawei, ZTE, OPPO и от других производителей', img:Phone},
    {id:1, header:'Планшеты', text:'Заменим разбитое стекло, старую батарею, разъем зарядки, а также произведём ремонт любой другой поломки на вашем устройстве', img:Tablet},
    {id:2, header:'Ноутбуки и компьютеры', text:'Ремонтируем обычные и игровые ноутбуки, компьютеры, моноблоки, MacBook и iMac. Мы справимся с самыми сложными поломками', img:LapTop},
    {id:3, header:'Игровые приставки и геймпады', text:'Если ваша приставка тормозит — не беда, мы почистим её и заменим термопасту. А если не включается обязательно оживим', img:Console},
    {id:4, header:'Видеокарты', text:'Восстанавливаем видеокарты на профессиональном оборудовании. Даже если они использовались для майнинга', img:graphicsCard},
    {id:5, header:'Бытовая техника', text:'Быстро и качественно ремонтируем телевизоры, пылесосы, фены, музыкальные колонки и другую электронику', img:Tv},
  ],
  CareInfo : [
    {id:0, header:'Платите только за сложное', text:'Берём деньги только за результат. А мелкий и несложный ремонт делаем бесплатно', img:CareMoney},
    {id:1, header:'Не тратьте время на дорогу', text:'Мы сами заберём устройство, а после ремонта привезём обратно', img:CareTime},
    {id:2, header:'Оставайтесь на связи', text:'Предоставим резервный телефон на время ремонта, чтобы вас никто не потерял', img:CarePhone},
  ],
  Team : [
    {id:0, name:'Ильяс Павлов', post:'директор сервиса', img:PersonTeam},
    {id:1, name:'Ильяс Павлов', post:'директор сервиса', img:PersonTeam},
    {id:2, name:'Ильяс Павлов', post:'директор сервиса', img:PersonTeam},
    {id:3, name:'Ильяс Павлов', post:'директор сервиса', img:PersonTeam},
  ],
  Review : [
    {id:0, name:'Юлия Михайлова', post:'Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !', img:Avatar1},
    {id:1, name:'Юлия Михайлова', post:'Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !', img:Avatar2},
    {id:2, name:'Юлия Михайлова', post:'Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !', img:Avatar2},
    {id:3, name:'Юлия Михайлова', post:'Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !', img:Avatar4},
    {id:3, name:'Юлия Михайлова', post:'Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !', img:Avatar5},
  ],
  ProtectCards : [
    {id:0,  img:protect1},
    {id:1,  img:protect2},
    {id:2,  img:protect1},
    {id:3,  img:protect2},
  ],
  Brands : [
    {id:0,  img:Brands1},
    {id:1,  img:Brands2},
    {id:2,  img:Brands3},
    {id:3,  img:Brands4},
    {id:4,  img:Brands5},
    {id:5,  img:Brands6},
    {id:6,  img:Brands1},
    {id:7,  img:Brands2},
    {id:8,  img:Brands3},
    {id:9,  img:Brands4},
    {id:10,  img:Brands5},
    {id:11,  img:Brands6},
  ],
  RepairCustom : [
    {id:0,  img:Brands1},
    {id:1,  img:Brands2},
    {id:2,  img:Brands3},
    {id:3,  img:Brands4},
    {id:4,  img:Brands5},
    {id:5,  img:Brands6},
    {id:6,  img:Brands1},
    {id:7,  img:Brands2},
    {id:8,  img:Brands3},
    {id:9,  img:Brands4},
    {id:10,  img:Brands5},
    {id:11,  img:Brands6},
  ],
}

export default state;

