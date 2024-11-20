import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; 

const BATIKS = {
    1: {
      id: '1',
      name: 'Batik Parang',
      image: { uri: "https://sonobudoyo.jogjaprov.go.id/resource/uploads/img/news/header_Screen_Shot_2024-10-06_at_18_37_53.png" },
      origin: 'Yogyakarta',
      description: "Batik Parang merupakan salah satu motif batik tertua di Indonesia. Motif ini melambangkan perjuangan tanpa henti untuk mencapai kebaikan.",
    },
    2: {
      id: '2',
      name: 'Batik Kawung',
      image: { uri: "https://i.pinimg.com/736x/c5/79/3d/c5793d2abfbce3dafe5bae4dd9b94296.jpg" },
      origin: 'Surakarta',
      description: "Batik Kawung merupakan motif batik dengan pola geometris yang melambangkan keseimbangan dan harmoni dalam kehidupan.",
    },
    3: {
      id: '3',
      name: 'Batik Mendung',
      image: { uri: "https://cdn1-production-images-kly.akamaized.net/FaHDEEBqtXj06hMchKhEd6Z-QYU=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1007116/original/028577700_1443707050-Batik-Mega-Mendung.jpg" },
      origin: 'Cirebon',
      description: "Batik Mendung menggambarkan awan mendung yang melambangkan suasana hati yang penuh dengan perasaan yang mendalam.",
    },
    4: {
      id: '4',
      name: 'Batik Truntum',
      image: { uri: "https://cdn0-production-images-kly.akamaized.net/9MR_2ht4TjQX3K16EPJUiUoceAo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1507162/original/054823500_1487067551-batik_truntum.jpg" },
      origin: 'Solo',
      description: "Batik Truntum dikenal sebagai motif batik untuk pernikahan, yang melambangkan cinta yang terus berkembang dan abadi.",
    },
    5: {
      id: '5',
      name: 'Batik Lurik',
      image: { uri: "https://www.shutterstock.com/image-vector/illustration-famous-batik-lurik-indonesia-260nw-2103850457.jpg" },
      origin: 'Yogyakarta',
      description: "Batik Lurik memiliki pola garis-garis yang tegas dan sederhana, yang menunjukkan ketenangan dan kedalaman makna dalam kehidupan.",
    },
    6: {
      id: '6',
      name: 'Batik Semen',
      image: { uri: "https://www.batikprabuseno.com/artikel/wp-content/uploads/2023/04/batik-motif-semen-rante.jpg" },
      origin: 'Yogyakarta',
      description: "Batik Semen melambangkan kesejahteraan dan kehidupan yang seimbang, sering digunakan dalam berbagai acara adat.",
    },
    7: {
      id: '7',
      name: 'Batik Ceplok',
      image: { uri: "https://telusurkultur.com/cdn/shop/articles/Cover_Blog_Dienvibi_-_2024-01-31T232608.124.jpg?v=1706718981" },
      origin: 'Jawa Tengah',
      description: "Batik Ceplok memiliki pola simetris yang melambangkan kedamaian, kesatuan, dan ketertiban dalam masyarakat.",
    },
    8: {
      id: '8',
      name: 'Batik Sidomukti',
      image: { uri: "https://thephrase.s3.amazonaws.com/img/012024/5490d3ac156d6928a0f87a89ffa68eeb6d0534ca.webp" },
      origin: 'Surakarta',
      description: "Batik Sidomukti memiliki filosofi kemakmuran dan kebahagiaan, sering digunakan dalam upacara pernikahan.",
    },
    9: {
      id: '9',
      name: 'Batik Pucuk Rebung',
      image: { uri: "https://i0.wp.com/rumahbatikbedjo.com/wp-content/uploads/2023/08/pucuk-rebung-betawi.png?resize=842%2C570&ssl=1" },
      origin: 'Cirebon',
      description: "Batik Pucuk Rebung menggambarkan tunas bambu yang melambangkan harapan dan potensi yang terus berkembang.",
    },
    10: {
      id: '10',
      name: 'Batik Tambal',
      image: { uri: "https://fitinline.com/data/article/20151009/Batik-Tambal-000.jpg" },
      origin: 'Jember',
      description: "Batik Tambal menggunakan pola tambalan yang melambangkan kebersamaan dan persatuan dalam keragaman.",
    },
    11: {
      id: '11',
      name: 'Batik Mendung',
      image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkU3KwzSNXEhrNDzfuH4FCzGIKhQ_WDUg8zg&s" },
      origin: 'Cirebon',
      description: "Batik Mendung menggambarkan awan mendung yang melambangkan suasana hati yang penuh dengan perasaan yang mendalam.",
    },
    12: {
      id: '12',
      name: 'Batik Lasem',
      image: { uri: "https://www.infobatik.com/wp-content/uploads/2020/11/batik-lasem-motif-burung-hong.jpg" },
      origin: 'Rembang',
      description: "Batik Lasem terkenal dengan motif burung hong yang melambangkan keindahan alam dan kehidupan yang seimbang.",
    },
    13: {
      id: '13',
      name: 'Batik Tujuh Rupa',
      image: { uri: "https://javanologi.uns.ac.id/wp-content/uploads/sites/26/2022/10/7rupa-1-1.jpg" },
      origin: 'Pekalongan',
      description: "Batik Tujuh Rupa melambangkan keragaman budaya dan kebersamaan dalam perbedaan.",
    },
    14: {
      id: '14',
      name: 'Batik Priyangan',
      image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFDSjYS0uhONfW7L-z4qXkHbSgjnNtfG2Bg&s" },
      origin: 'Tasikmalaya',
      description: "Batik Priyangan memiliki pola yang mencerminkan kehidupan masyarakat yang penuh dengan kearifan dan nilai-nilai luhur.",
    },
    15: {
      id: '15',
      name: 'Batik Grompol',
      image: { uri: "https://www.shutterstock.com/image-vector/yogyakarta-batik-motif-ceplok-grompol-600w-1788643547.jpg" },
      origin: 'Yogyakarta',
      description: "Batik Grompol melambangkan kebersamaan dalam keluarga dan masyarakat, sering digunakan dalam upacara adat.",
    },
    16: {
      id: '16',
      name: 'Batik Sekar Jagad',
      image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbBuy3R-nuO5kcNP-nNo0lcuI5gbF56sqLQ&s" },
      origin: 'Solo',
      description: "Batik Sekar Jagad melambangkan keindahan dunia yang penuh warna dan kehidupan, dengan motif bunga yang melambangkan kesejahteraan.",
    },
    17: {
      id: '17',
      name: 'Batik Betawi',
      image: { uri: "https://asset.kompas.com/crops/toWuwzuFSMmcoUOqYpIJDlEZKCI=/0x0:600x400/750x500/data/photo/2022/05/19/6285dc358cde6.jpg" },
      origin: 'Jakarta',
      description: "Batik Betawi memiliki motif yang kental dengan budaya Betawi, melambangkan kekuatan dan keindahan tradisi Jakarta.",
    },
    18: {
      id: '18',
      name: 'Batik Cendrawasih',
      image: { uri: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ketiknews/original/210803133618-mengu.jpg" },
      origin: 'Papua',
      description: "Batik Cendrawasih melambangkan keindahan alam Papua dengan motif burung cendrawasih yang menjadi simbol kemegahan dan keindahan.",
    },
    19: {
      id: '19',
      name: 'Batik Tumpal',
      image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKIIket4S3QRFvgQiaTUUPRbUBgxpHrT2Sw&s" },
      origin: 'Jawa Barat',
      description: "Batik Tumpal memiliki pola tumpalan yang melambangkan ketabahan dan ketekunan dalam menjalani hidup.",
    },
    20: {
      id: '20',
      name: 'Batik Keraton',
      image: { uri: "https://penelitianpariwisata.id/wp-content/uploads/2023/03/d14ab8b9d8b395fc8d63de504fa15f50.jpg" },
      origin: 'Yogyakarta',
      description: "Batik Keraton merupakan batik yang khas dari keraton Yogyakarta, melambangkan kemegahan dan keindahan istana.",
    }
  };
  

export default function TeamScreen() {
  const { id } = useLocalSearchParams(); 

  const team = HISTORY[id]; 

  if (!team) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Destinasi tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{team.name}</Text>
      <Text style={styles.description}>{team.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',       
    backgroundColor: 'white',
    paddingHorizontal: 20,      
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',       
  },
  description: {
    fontSize: 16,
    textAlign: 'center',       
    lineHeight: 22,
    color: '#333',
  },
});