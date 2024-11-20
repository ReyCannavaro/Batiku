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
          <Ionicons name="arrow-back" size={24} color="#4E342E" /> {/* Back Icon */}
        </TouchableOpacity>
        <TextInput
          placeholder="Cari Informasi"
          placeholderTextColor="#8D6E63"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.accountButton}>
          <Ionicons name="person" size={24} color="#4E342E" /> {/* Account Icon */}
        </TouchableOpacity>
      </View>


      <View style={styles.content}>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
          <Text style={styles.text}>
            Aplikasi ini bertujuan untuk melestarikan dan mempromosikan keindahan budaya batik Indonesia. 
            Kami percaya bahwa setiap pola batik memiliki cerita dan filosofi yang layak untuk diketahui oleh masyarakat luas.
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Tujuan Aplikasi</Text>
          <Text style={styles.text}>
            {'\u2022'} Meningkatkan kesadaran masyarakat tentang kekayaan budaya Indonesia melalui batik.
          </Text>
          <Text style={styles.text}>
            {'\u2022'} Menyediakan platform edukasi untuk memahami pola dan makna batik dari berbagai daerah.
          </Text>
          <Text style={styles.text}>
            {'\u2022'} Mendorong generasi muda untuk mencintai dan melestarikan budaya batik.
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Manfaat Aplikasi</Text>
          <Text style={styles.text}>
            {'\u2022'} Sebagai sumber informasi terpercaya tentang batik Indonesia.
          </Text>
          <Text style={styles.text}>
            {'\u2022'} Membantu pengrajin batik dalam memperkenalkan karya mereka kepada dunia.
          </Text>
          <Text style={styles.text}>
            {'\u2022'} Memberikan inspirasi kepada desainer busana dalam menciptakan karya yang berbasis budaya.
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Dampak Positif kepada Masyarakat</Text>
          <Text style={styles.text}>
            {'\u2022'} Meningkatkan rasa bangga terhadap warisan budaya Indonesia.
          </Text>
          <Text style={styles.text}>
            {'\u2022'} Memberdayakan komunitas lokal melalui apresiasi terhadap batik.
          </Text>
          <Text style={styles.text}>
            {'\u2022'} Mendukung perekonomian daerah melalui promosi batik sebagai produk unggulan.
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE6DD',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#D7CCC8',
    borderRadius: 8,
    marginRight: 8,
  },
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
  accountButton: {
    padding: 10,
    backgroundColor: '#D7CCC8',
    borderRadius: 8,
    marginLeft: 8,
  },
  content: {
    marginTop: 10,
  },
  infoSection: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#FBE9E7',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#5D4037',
  },
  imageGallery: {
    marginBottom: 20,
    marginTop: 10,
  },
  galleryImage: {
    width: 200,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
});
