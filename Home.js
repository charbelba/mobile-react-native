import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.scrollViewContent}
    >
      {/* Section 1 */}
      <View style={styles.section1}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/400" }}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Find Your Dream Home</Text>
          <Text style={styles.description}>
            Discover the best properties tailored to your needs and budget.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section 2 */}
      <View style={styles.section2}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Discover Your Next Property</Text>
          <Text style={styles.description}>
            Explore our wide range of listings and find the perfect match.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.ctaButtonText}>Search Listings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section 3 - Featured Properties */}
      <View style={styles.section3}>
        <Text style={styles.sectionTitle}>Our Featured Properties</Text>
        <View style={styles.cards}>
          {["images1.jpg", "images2.jpg", "images3.jpg"].map((image, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={{
                  uri: `https://via.placeholder.com/300x250?text=${image}`,
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Property {index + 1}</Text>
              <Text style={styles.cardDescription}>$800/month</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Section 4 - Trending Properties */}
      <View style={styles.section4}>
        <Text style={styles.sectionTitle}>Trending Properties</Text>
        <View style={styles.cards}>
          {["./assets/images4.jpg", "images5.jpg", "images6.jpg"].map(
            (image, index) => (
              <View key={index} style={styles.card}>
                <Image
                  source={{
                    uri: `https://via.placeholder.com/300x250?text=${image}`,
                  }}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>
                  Trending Property {index + 1}
                </Text>
                <Text style={styles.cardDescription}>$1500/month</Text>
              </View>
            )
          )}
        </View>
      </View>

      {/* Section 5 */}
      <View style={styles.section5}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Post Your Property</Text>
          <Text style={styles.description}>
            List your property and connect with potential tenants.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Post")}
          >
            <Text style={styles.ctaButtonText}>Post a Listing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContent: {
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    paddingBottom: 20, // Optional, to provide some space at the bottom
  },
  section1: {
    flexDirection: "column", // Stack the content vertically
    alignItems: "center", // Center content horizontally
    padding: 20,
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center", // Center the image
    marginBottom: 20, // Space between the image and title
  },
  image: {
    width: 400,
    height: 250,
    borderRadius: 12,
  },
  content: {
    justifyContent: "center",
    alignItems: "center", // Center the content horizontally
  },
  title: {
    fontSize: 40,
    fontWeight: "300",
    textAlign: "center", // Ensure the title is centered
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    color: "#555",
    textAlign: "center", // Center the description text
  },
  ctaButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  ctaButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  section2: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  section3: {
    marginTop: 20,
    padding: 20,
  },
  section4: {
    marginTop: 20,
    padding: 20,
  },
  section5: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center", // Center the section title
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center", // Center the subtitle
  },
  cards: {
    flexDirection: "row",
    justifyContent: "center", // Center the cards horizontally
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    width: 300,
    height: 380, // Increased the height of the card
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    marginHorizontal: 10, // To ensure spacing between cards
  },
  cardImage: {
    width: "100%",
    height: 250, // Adjusted the image height for better card proportion
    borderRadius: 12,
    objectFit: "cover",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center", // Center the card title
  },
  cardDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
    textAlign: "center", // Center the card description
  },
});

export default Home;
