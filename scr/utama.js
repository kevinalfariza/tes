import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import hook navigasi

const DashboardScreen = () => {
  const navigation = useNavigation(); // Hook navigasi

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SiDarling</Text>
        <Text style={styles.subHeaderText}>Hai, KAI</Text>
      </View>

      {/* Saldo Section */}
      <View style={styles.saldoContainer}>
        <Image source={require('./assets/uang.png')} style={styles.saldoIcon} />
        <Text style={styles.saldoText}>Rp 0</Text>
        <View style={styles.saldoOptions}>
          {["pulsa", "listrik", "internet"].map((item, index) => {
            let imageSource;
            switch (item) {
              case "pulsa":
                imageSource = require('./assets/pulsa.png');
                break;
              case "listrik":
                imageSource = require('./assets/listrik.png');
                break;
              case "internet":
                imageSource = require('./assets/internet.png');
                break;
              default:
                imageSource = null;
            }

            return (
              <TouchableOpacity key={index} style={styles.option}>
                {imageSource && <Image source={imageSource} style={styles.saldoIcon} />}
                <Text style={styles.optionText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        {["Cara Pakai", "Cakupan", "Mengelola"].map((feature, index) => (
          <TouchableOpacity key={index} style={styles.featureButton}>
            <Text style={styles.featureText}>{feature}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Articles Section */}
      <ScrollView style={styles.articlesContainer}>
        <Text style={styles.articlesTitle}>Artikel</Text>
        <View style={styles.articleRow}>
          {[
            { image: require('./assets/plastik.png'), text: "Indonesia Darurat Sampah Plastik" },
            { image: require('./assets/sungai.jpg'), text: "Warga Diimbau Tak Buang Sampah di Sungai" },
          ].map((article, index) => (
            <View key={index} style={styles.articleCard}>
              <Image source={article.image} style={styles.articleImage} />
              <Text style={styles.articleText}>{article.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { iconUrl: "https://cdn.icon-icons.com/icons2/1151/PNG/512/1486505259-estate-home-house-building-property-real_81428.png", alt: "home", route: "Home" },
          { iconUrl: "https://cdn.icon-icons.com/icons2/676/PNG/512/shopping-cart_icon-icons.com_60593.png", alt: "cart", route: "Cart" },
          { iconUrl: "https://img.icons8.com/?size=100&id=63650&format=png&color=000000", alt: "plus", route: "Add" },
          { iconUrl: "https://cdn.icon-icons.com/icons2/2072/PNG/512/alarm_alert_bell_internet_notice_notification_security_icon_127089.png", alt: "notification", route: "Notifications" },
          { iconUrl: "https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_profile_smiley_happy_people_icon_181659.png", alt: "user", route: "Profil" }, // Navigasi ke halaman Profil
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconContainer}
            onPress={() => navigation.navigate(item.route)} 
          >
            <Image source={{ uri: item.iconUrl }} style={styles.navIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007b55',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  saldoContainer: {
    backgroundColor: '#d4edda',
    margin: 16,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
  },
  saldoIcon: {
    width: 40,
    height: 40,
  },
  saldoText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#007b55',
  },
  saldoOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  option: {
    alignItems: 'center',
    padding: 10,
  },
  optionText: {
    fontSize: 14,
    color: '#007b55',
    marginTop: 5,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  featureButton: {
    backgroundColor: '#007b55',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  featureText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  articlesContainer: {
    flex: 1,
    padding: 16,
  },
  articlesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007b55',
  },
  articleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  articleCard: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 100,
  },
  articleText: {
    padding: 10,
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default DashboardScreen;
