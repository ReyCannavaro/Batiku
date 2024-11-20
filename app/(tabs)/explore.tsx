import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#4E342E" />
        </TouchableOpacity>
        <TextInput
          placeholder="Cari Informasi"
          placeholderTextColor="#8D6E63"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.accountButton}>
          <Ionicons name="person" size={24} color="#4E342E" />
        </TouchableOpacity>
      </View>


      <View style={styles.content}>

        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Tentang Batik</Text>
          <Text style={styles.text}>
            Batik adalah seni tekstil Indonesia dengan teknik menggambar pola pada kain
            menggunakan lilin atau malam. Kata "batik" berasal dari bahasa Jawa, yaitu "amba"
            (menulis) dan "titik" (titik).
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Sejarah Batik</Text>
          <Text style={styles.text}>
            Batik merupakan warisan budaya Indonesia yang telah diakui dunia. Pada tahun 2009,
            UNESCO mengakui batik sebagai Warisan Budaya Tak Benda Manusia. Batik berasal dari
            Asia Tenggara dan berkembang pesat di Indonesia, terutama pada masa kerajaan Jawa.
          </Text>
        </View>


        <View style={styles.additionalSection}>
          <Text style={styles.sectionTitle}>Motif Batik</Text>
          <Text style={styles.text}>
            Motif populer meliputi:
            {'\n\u2022'} Batik Tujuh Rupa: Corak flora dan fauna.
            {'\n\u2022'} Batik Mega Mendung: Motif awan khas Cirebon.
            {'\n\u2022'} Batik Parang: Motif garis miring melambangkan perjuangan.
            {'\n\u2022'} Batik Kawung: Lingkaran menyerupai buah kolang-kaling.
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Teknik Pembuatan</Text>
          <Text style={styles.text}>
            {'\u2022'} Batik Tulis: Dibuat dengan canting untuk pola detail.
            {'\n\u2022'} Batik Cap: Dibuat dengan stempel tembaga untuk pola seragam.
          </Text>
        </View>


        <View style={styles.additionalSection}>
          <Text style={styles.sectionTitle}>Makna Filosofis</Text>
          <Text style={styles.text}>
            Motif batik mencerminkan nilai budaya:
            {'\n\u2022'} Sido Luhur: Kehidupan luhur dan bermartabat.
            {'\n\u2022'} Sido Mukti: Kemakmuran dan kebahagiaan.
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Manfaat dan Styling Modern</Text>
          <Text style={styles.text}>
            Batik kini digunakan dalam berbagai acara resmi dan kasual. Tren modern menampilkan
            batik dengan desain minimalis yang cocok untuk pakaian sehari-hari. Manfaat batik
            mencakup pelestarian budaya, pengembangan ekonomi kreatif, dan promosi identitas
            bangsa.
          </Text>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageGallery}>
          <Image
            source={{ uri: 'https://cdn1-production-images-kly.akamaized.net/TOLJitlqiVbaptUc2ESFt1N9AfM=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4226062/original/015474800_1668420778-2021_0226_15092000.jpg' }}
            style={styles.galleryImage}
          />
          <Image
            source={{ uri: 'https://batikkhasdaerah.com/wp-content/uploads/2022/10/Batikkhas-indonesia.jpg' }}
            style={styles.galleryImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQkDMW0PanpsN2asZOmGjj4EkFcKfigGv8Q&s' }}
            style={styles.galleryImage}
          />
        </ScrollView>


        <View style={styles.footer}>
          <Text style={styles.text}>&copy; 2024 Batik Explore. Semua Hak Dilindungi.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFE6DD', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backButton: { padding: 10, backgroundColor: '#D7CCC8', borderRadius: 8, marginRight: 8 },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#A1887F',
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#5D4037',
    backgroundColor: '#FBE9E7',
  },
  accountButton: { padding: 10, backgroundColor: '#D7CCC8', borderRadius: 8, marginLeft: 8 },
  content: { marginTop: 10 },
  profileSection: { marginBottom: 20, padding: 16, backgroundColor: '#FBE9E7', borderRadius: 12 },
  infoSection: { marginBottom: 20, padding: 16, backgroundColor: '#FFDAB9', borderRadius: 12 },
  additionalSection: { marginBottom: 20, padding: 16, backgroundColor: '#FFF3E0', borderRadius: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#4E342E', marginBottom: 8 },
  text: { fontSize: 14, lineHeight: 20, color: '#5D4037' },
  imageGallery: { marginBottom: 20, marginTop: 10 },
  galleryImage: {
    width: 200,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  footer: { alignItems: 'center', padding: 16, backgroundColor: '#D7CCC8', borderRadius: 12 },
});
