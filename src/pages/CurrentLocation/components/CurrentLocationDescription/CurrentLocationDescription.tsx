import React from 'react';
import { Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import './CurrentLocationDescription.scss';
import Title from 'antd/lib/typography/Title';

const { Paragraph } = Typography;

interface IReviewItemProps {
  _id?: string;
  region?: string;
  title?: string;
  description?: string;
  electricity?: boolean;
  water?: boolean;
  road?: boolean;
  pool?: boolean;
  biking?: boolean;
  hiking?: boolean;
  riding?: boolean;
  yoga?: boolean;
  motorbike?: boolean;
  alpinism?: boolean;
  trekking?: boolean;
  tennis?: boolean;
  cinema?: boolean;
  fishing?: boolean;
  aquapark?: boolean;
  golf?: boolean;
  volleyball?: boolean;
  boardGames?: boolean;
  diving?: boolean;
  ramp?: boolean;
  dogPlayground?: boolean;
  nursery?: boolean;
  fireplace?: boolean;
  summerHouse?: boolean;
  grill?: boolean;
  wifi?: boolean;
  laundry?: boolean;
  sauna?: boolean;
  sportsGround?: boolean;
  playground?: boolean;
  beach?: boolean;
  indoorPool?: boolean;
  pharmacy?: boolean;
  miniZoo?: boolean;
  store?: boolean;
  cafe?: boolean;
  restaurant?: boolean;
  parking?: boolean;
}

const CurrentLocationDescription: React.FC<IReviewItemProps> = props => {
  return (
    <div className='location-description'>
      <Paragraph style={{ color: '#808080', marginBottom: 4 }} className='location-description-icon'>
        {props.region}
      </Paragraph>
      <Title
        level={1}
        style={{ marginTop: 0, fontWeight: 500, fontSize: '28px', lineHeight: '36px', marginBottom: 24 }}
      >
        {props.title}
      </Title>
      <Paragraph style={{ marginBottom: 32 }}> {props.description} </Paragraph>
      <div className='infrastructure'>
        <Title level={3} style={{ fontWeight: 500, fontSize: '18px', lineHeight: '24px', marginBottom: 20 }}>
          Доступные удобства
        </Title>
        <Title level={5} style={{ fontSize: '14px', lineHeight: '24px', marginBottom: 12 }}>
          Удобства
        </Title>
        <ul className='location-grid'>
          <li style={{ listStyle: 'none' }}>
            {props.water ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-water icons'></span>
                Вода
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-water icons'></span>
                Вода
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.nursery ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-nursery icons'></span>
                Детская комната
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-nursery icons'></span>
                Детская комната
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.fireplace ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-fireplace icons'></span>
                Кострище
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-fireplace icons'></span>
                Кострище
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.electricity ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-electricity icons'></span>
                Электричество
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-electricity icons'></span>
                Электричество
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.grill ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-grill icons'></span>
                Гриль
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-grill icons'></span>
                Гриль
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.summerHouse ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-summerhouse icons'></span>
                Беседка
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-summerhouse icons'></span>
                Беседка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.wifi ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-wifi icons'></span>
                Wi-Fi
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-wifi icons'></span>
                Wi-Fi
              </Paragraph>
            )}
          </li>
        </ul>
        <Title level={5} style={{ fontSize: '14px', lineHeight: '24px', marginBottom: 12 }}>
          Рядом
        </Title>
        <ul className='location-grid'>
          <li style={{ listStyle: 'none' }}>
            {props.pharmacy ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-pharmacy icons'></span>
                Аптека
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-pharmacy icons'></span>
                Аптека
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.laundry ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-laundry icons'></span>
                Прачечная
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-laundry icons'></span>
                Прачечная
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.restaurant ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-restaurant icons'></span>
                Ресторан
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-restaurant icons'></span>
                Ресторан
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.store ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-store icons'></span>
                Магазин
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-store icons'></span>
                Магазин
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.cafe ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-cafe icons'></span>
                Кафе
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-cafe icons'></span>
                Кафе
              </Paragraph>
            )}
          </li>
        </ul>
        <Title level={5} style={{ fontSize: '14px', lineHeight: '24px', marginBottom: 12 }}>
          Доступная среда
        </Title>
        <ul className='location-grid'>
          <li style={{ listStyle: 'none' }}>
            {props.ramp ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-ramp icons'></span>
                Пандус
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-ramp icons'></span>
                Пандус
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.dogPlayground ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-dogplayground icons'></span>
                Площадка для собак
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-dogplayground icons'></span>
                Площадка для собак
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.motorbike ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-motorbike icons'></span>
                Мотобайк
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-motorbike icons'></span>
                Мотобайк
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.parking ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-parking icons'></span>
                Парковка
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-parking icons'></span>
                Парковка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.hiking ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-hiking icons'></span>
                Пешие туры
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-hiking icons'></span>
                Пешие туры
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.riding ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-riding icons'></span>
                Верховая езда
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-riding icons'></span>
                Верховая езда
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.road ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-road icons'></span>
                Подьездные пути
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-road icons'></span>
                Подьездные пути
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.biking ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-biking icons'></span>
                Езда на велосипеде
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-biking icons'></span>
                Езда на велосипеде
              </Paragraph>
            )}
          </li>
        </ul>
        <Title level={5} style={{ fontSize: '14px', lineHeight: '24px', marginBottom: 12 }}>
          Развлечения
        </Title>
        <ul className='location-grid'>
          <li style={{ listStyle: 'none' }}>
            {props.pool ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-pool icons'></span>
                Бассейн
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-pool icons'></span>
                Бассейн
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.cinema ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-cinema icons'></span>
                Просмотр фильмов
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-cinema icons'></span>
                Просмотр фильмов
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.playground ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-playground icons'></span>
                Детская площадка
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-playground icons'></span>
                Детская площадка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.indoorPool ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-indoorpool icons'></span>
                Крытый бассейн
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-indoorpool icons'></span>
                Крытый бассейн
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.miniZoo ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-minizoo icons'></span>
                Мини-зоопарк
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-minizoo icons'></span>
                Мини-зоопарк
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.sportsGround ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-sports icons'></span>
                Спортивная площадка
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-sports icons'></span>
                Спортивная площадка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.beach ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-beach icons'></span>
                Пляж
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-beach icons'></span>
                Пляж
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.boardGames ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-boardgames icons'></span>
                Настольные игры
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-boardgames icons'></span>
                Настольные игры
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.volleyball ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-volleyball icons'></span>
                Волейбол
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-volleyball icons'></span>
                Волейбол
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.aquapark ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-aquapark icons'></span>
                Аквапарк
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-aquapark icons'></span>
                Аквапарк
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.yoga ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-yoga icons'></span>
                Йога
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-yoga icons'></span>
                Йога
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.golf ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-golf icons'></span>
                Гольф
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-golf icons'></span>
                Гольф
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.sauna ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-sauna icons'></span>
                Сауна
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-sauna icons'></span>
                Сауна
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.tennis ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-tennis icons'></span>
                Теннис
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-tennis icons'></span>
                Теннис
              </Paragraph>
            )}
          </li>
        </ul>
        <Title level={5} style={{ fontSize: '14px', lineHeight: '24px', marginBottom: 12 }}>
          Активный отдых
        </Title>
        <ul className='location-grid'>
          <li style={{ listStyle: 'none' }}>
            {props.fishing ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-fishing icons'></span>
                Рыбалка
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-fishing icons'></span>
                Рыбалка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.alpinism ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-alpinism icons'></span>
                Альпинизм
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-alpinism icons'></span>
                Альпинизм
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.diving ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-diving icons'></span>
                Дайвинг
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-diving icons'></span>
                Дайвинг
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.trekking ? (
              <Paragraph>
                <CheckOutlined style={{ color: '#7AB054', marginRight: 8 }} />
                <span className='icon-trekking icons'></span>
                Треккинг
              </Paragraph>
            ) : (
              <Paragraph>
                <CloseOutlined style={{ color: '#C4C4C4', marginRight: 8 }} />
                <span className='icon-trekking icons'></span>
                Треккинг
              </Paragraph>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentLocationDescription;
