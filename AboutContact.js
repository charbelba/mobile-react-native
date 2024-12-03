import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const AboutContact = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutContactContainer}>
        {/* About Section */}
        <View style={styles.aboutSection}>
          <Image
            source={{ uri: "https://via.placeholder.com/400" }} // Use uri here
            style={styles.aboutImage}
          />
          <Text style={styles.aboutParagraph}>
            At <Text style={styles.bold}>HomeFinder</Text>, our mission is to
            connect people with suitable rental properties, making the process
            of finding and listing properties seamless and stress-free.
          </Text>
          <Text style={styles.aboutParagraph}>
            Whether you're a tenant looking for your dream home or a landlord
            searching for reliable tenants, we're here to help every step of the
            way.
          </Text>

          <View style={styles.mission}>
            <Text style={styles.missionHeader}>Our Mission</Text>
            <Text style={styles.missionText}>
              To provide a user-friendly platform that makes it easy for tenants
              and landlords to connect, ensuring a seamless and hassle-free
              rental experience for everyone involved.
            </Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.header}>Contact Us</Text>
          <Text style={styles.contactInfo}>
            Have questions? We’d love to hear from you! Feel free to reach out
            to us through the form below or via our contact details:
          </Text>

          <View style={styles.contactDetails}>
            <Text style={styles.contactDetail}>
              <Text style={styles.bold}>Email:</Text> support@homefinder.com
            </Text>
            <Text style={styles.contactDetail}>
              <Text style={styles.bold}>Phone:</Text> +1 (123) 456-7890
            </Text>
            <Text style={styles.contactDetail}>
              <Text style={styles.bold}>Office:</Text> 123 Homefinder Blvd,
              Suite 400, Cityville, CA 90000
            </Text>
          </View>

          <View style={styles.contactForm}>
            <TextInput
              style={styles.textInput}
              placeholder="Your message"
              multiline
              numberOfLines={5}
            />
            <Button
              title="Send Message"
              onPress={() => alert("Message Sent!")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  aboutContactContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  aboutSection: {
    marginBottom: 30,
  },
  aboutImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  aboutParagraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
  bold: {
    fontWeight: "bold",
  },
  mission: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  missionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  missionText: {
    fontSize: 16,
    color: "#555",
  },
  contactSection: {
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 10,
    color: "#444",
  },
  contactDetails: {
    marginBottom: 20,
  },
  contactDetail: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  contactForm: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 15,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    height: 100,
    fontSize: 16,
    textAlignVertical: "top",
  },
});

export default AboutContact;
