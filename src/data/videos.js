import belgenetLogo from "../assets/images/belgenet.jpg";
import bulutsehirLogo from "../assets/images/bulutsehir.jpg";
import eimzaLogo from "../assets/images/e-imza.jpg";

const videoData = [
  {
    category: "BELGENET",
    videos: [
      {
        title: ".eyp uzantili dosya acma",
        thumbnail: belgenetLogo,
        src: `/videos/belgenet/eyp_uzantili_dosya_acma.mp4`,
      },
      {
        title: "Mukerrer Evrak Ustyazi Hitap Duzenleme",
        thumbnail: belgenetLogo,
        src: "/videos/belgenet/mukerrer_evrak_ustyazi_hitap_duzenleme.mp4",
      },
    ],
  },
  {
    category: "BULUTŞEHİR",
    videos: [
      {
        title: "Dosya Talep Baglantisi Olusturma",
        thumbnail: bulutsehirLogo,
        src: "/videos/bulutsehir/dosya_talep_baglantisi_olusturma.mp4",
      },
      {
        title: "Personel Arasi Dosya Paylasimi",
        thumbnail: bulutsehirLogo,
        src: "/videos/bulutsehir/personel_arasi_klasor_paylasimi.mp4",
      },
      {
        title: "Personel Harici Dosya Paylasimi",
        thumbnail: bulutsehirLogo,
        src: "/videos/bulutsehir/personal_harici_dosya_gonderimi.mp4",
      },
    ],
  },
  {
    category: "ELEKTRONİK İMZA",
    videos: [
      {
        title: "Basvuru Sureci",
        thumbnail: eimzaLogo,
        src: "/videos/e_imza/elektronik_imza_basvuru_sureci.mp4",
      },
      {
        title: "PIN Kodu Olusturma Islemi",
        thumbnail: eimzaLogo,
        src: "/videos/e_imza/pin_kodu_olusturma_islemi.mp4",
      },
    ],
  },
];

export default videoData;
