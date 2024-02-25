import { StaticImageData } from 'next/image';

import portfolioImg1 from './images/portfolio-1.jpg';
import portfolioImg2 from './images/portfolio-2.jpg';
import portfolioImg3 from './images/portfolio-3.jpg';
import portfolioImg4 from './images/portfolio-4.jpg';
import portfolioImg5 from './images/portfolio-5.jpg';

export type PortfolioType = {
  id: number;
  title: string;
  info: string;
  img: StaticImageData;
}[];

export const portfolioArray: PortfolioType = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consequatur, porro omnis? Tenetur at dolorum facilis possimusminima nulla laudantium, voluptas odio repellendus praesentiumratione adipisci maiores consectetur. Dicta, eum eaque, officiaquaerat et voluptatem laudantium molestias vero providentdeleniti pariatur minima incidunt quidem possimus. Dolorum earumea commodi unde. Minima sed eos sint quo dolores deserunt autincidunt accusantium laboriosam aliquam iusto, ipsum eadoloribus, alias mollitia saepe nisi at cumque pariaturvoluptate corporis sapiente ad amet optio! Qui libero eum earumet ullam sapiente sint voluptatem omnis? Dolor ut natus animinon exercitationem? Assumenda eum optio ab possimus obcaecati?',
    img: portfolioImg1,
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consequatur, porro omnis? Tenetur at dolorum facilis possimusminima nulla laudantium, voluptas odio repellendus praesentiumratione adipisci maiores consectetur. Dicta, eum eaque, officiaquaerat et voluptatem laudantium molestias vero providentdeleniti pariatur minima incidunt quidem possimus. Dolorum earumea commodi unde. Minima sed eos sint quo dolores deserunt autincidunt accusantium laboriosam aliquam iusto, ipsum eadoloribus, alias mollitia saepe nisi at cumque pariaturvoluptate corporis sapiente ad amet optio! Qui libero eum earumet ullam sapiente sint voluptatem omnis? Dolor ut natus animinon exercitationem? Assumenda eum optio ab possimus obcaecati?',
    img: portfolioImg2,
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consequatur, porro omnis? Tenetur at dolorum facilis possimusminima nulla laudantium, voluptas odio repellendus praesentiumratione adipisci maiores consectetur. Dicta, eum eaque, officiaquaerat et voluptatem laudantium molestias vero providentdeleniti pariatur minima incidunt quidem possimus. Dolorum earumea commodi unde. Minima sed eos sint quo dolores deserunt autincidunt accusantium laboriosam aliquam iusto, ipsum eadoloribus, alias mollitia saepe nisi at cumque pariaturvoluptate corporis sapiente ad amet optio! Qui libero eum earumet ullam sapiente sint voluptatem omnis? Dolor ut natus animinon exercitationem? Assumenda eum optio ab possimus obcaecati?',
    img: portfolioImg3,
  },
  {
    id: 4,
    title: 'Lorem Ipsum',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consequatur, porro omnis? Tenetur at dolorum facilis possimusminima nulla laudantium, voluptas odio repellendus praesentiumratione adipisci maiores consectetur. Dicta, eum eaque, officiaquaerat et voluptatem laudantium molestias vero providentdeleniti pariatur minima incidunt quidem possimus. Dolorum earumea commodi unde. Minima sed eos sint quo dolores deserunt autincidunt accusantium laboriosam aliquam iusto, ipsum eadoloribus, alias mollitia saepe nisi at cumque pariaturvoluptate corporis sapiente ad amet optio! Qui libero eum earumet ullam sapiente sint voluptatem omnis? Dolor ut natus animinon exercitationem? Assumenda eum optio ab possimus obcaecati?',
    img: portfolioImg4,
  },
  {
    id: 5,
    title: 'Lorem Ipsum',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consequatur, porro omnis? Tenetur at dolorum facilis possimusminima nulla laudantium, voluptas odio repellendus praesentiumratione adipisci maiores consectetur. Dicta, eum eaque, officiaquaerat et voluptatem laudantium molestias vero providentdeleniti pariatur minima incidunt quidem possimus. Dolorum earumea commodi unde. Minima sed eos sint quo dolores deserunt autincidunt accusantium laboriosam aliquam iusto, ipsum eadoloribus, alias mollitia saepe nisi at cumque pariaturvoluptate corporis sapiente ad amet optio! Qui libero eum earumet ullam sapiente sint voluptatem omnis? Dolor ut natus animinon exercitationem? Assumenda eum optio ab possimus obcaecati?',
    img: portfolioImg5,
  },
];
