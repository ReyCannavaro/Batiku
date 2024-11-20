import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import appData from '../../data/appdata.json'; 

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua'); 
  const batiks = appData.batiks; 

 
  const filteredBatiks = batiks.filter((batik) => {
    const matchesQuery =
      batik.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      batik.origin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || batik.origin === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  const categories = ['Semua', 'Yogyakarta', 'Surakarta', 'Solo', 'Cirebon', 'Jawa Tengah', 'Jember', 'Rembang', 'Pekalongan', 'Tasikmalaya', 'Jakarta', 'Papua', 'Jawa Barat'];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#4E342E" />
        </TouchableOpacity>
        <TextInput
          placeholder="Cari Batik"
          placeholderTextColor="#8D6E63"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.accountButton}>
          <Ionicons name="person" size={24} color="#4E342E" />
        </TouchableOpacity>
      </View>


      <View style={styles.bannerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.banner}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNXXgNwK1puQZnFZfqqkwgSP7ThRH_kRsWg&s' }}
              style={styles.bannerImage}
            />
            <Text style={styles.bannerText}>Temukan Keindahan Batik Indonesia</Text>
          </View>
          <View style={styles.banner}>
            <Image
              source={{ uri: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/440/2024/05/06/hu-4146219559.jpg' }}
              style={styles.bannerImage}
            />
            <Text style={styles.bannerText}>Eksplorasi Budaya Indonesia</Text>
          </View>
        </ScrollView>
      </View>


      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Asal Batik</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Macam Batik</Text>
        <FlatList
          data={filteredBatiks}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productGrid}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productOrigin}>Asal dari {item.origin}</Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => navigation.navigate('../../app/Detail/detailbatik.tsx', { batikId: batiks.id })}
              >
                <Text style={styles.readMoreText}>Selengkapnya</Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
  bannerContainer: {
    marginBottom: 20,
    height: 220,
  },
  banner: {
    marginRight: 10,
    position: 'relative',
    width: 300,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  bannerText: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categories: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4E342E', 
  },
  categoryItem: {
    backgroundColor: '#BCAAA4', 
    borderRadius: 8,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  featuredSection: {
    marginBottom: 20,
  },
  productGrid: {
    marginTop: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FBE9E7', 
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height: 200,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#5D4037', 
  },
  productOrigin: {
    fontSize: 14,
    color: '#795548', 
    marginVertical: 5,
  },
  readMoreButton: {
    backgroundColor: '#5D4037', 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  readMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});