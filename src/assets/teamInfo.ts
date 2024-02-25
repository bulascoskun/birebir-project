import teamMember1 from './images/team-images/team-member-1.png';
import teamMember2 from './images/team-images/team-member-2.png';
import teamMember3 from './images/team-images/team-member-3.png';
import teamMember4 from './images/team-images/team-member-4.png';

export type TeamInfoType = {
  name: string;
  profession: string;
  mobileNumber: string;
  email: string;
  image: any;
};

export const teamInfo: TeamInfoType[] = [
  {
    name: 'Oğuzhan Ertuğ',
    profession: 'Mimar',
    mobileNumber: '+90 553 274 4766',
    email: 'oguzhanertug@birebirmimarlık.com',
    image: teamMember1,
  },
  {
    name: 'Samet Güçkan',
    profession: 'Mimar',
    mobileNumber: '+90 553 274 4766',
    email: 'sametguckan@birebirmimarlık.com',
    image: teamMember2,
  },
  {
    name: 'Yavuz Güçkan',
    profession: 'Mimar',
    mobileNumber: '+90 553 274 4766',
    email: 'yavuzguckan@birebirmimarlık.com',
    image: teamMember3,
  },
  {
    name: 'Yavuz Ertuğ',
    profession: 'Mimar',
    mobileNumber: '+90 553 274 4766',
    email: 'oguzhanertug@birebirmimarlık.com',
    image: teamMember4,
  },
];
