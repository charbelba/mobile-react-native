import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const AboutContact = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutContactContainer}>
        <View style={styles.aboutSection}>
          <Text style={styles.aboutParagraph}>
            At <Text style={styles.bold}>HomeFinder</Text>, our mission is to
            connect people with suitable rental properties, making the process
            of finding and listing properties seamless and stress-free. Whether
            you're a tenant looking for your dream home or a landlord searching
            for reliable tenants, we're here to help every step of the way.
          </Text>
          <Text>
            Our platform is designed with both tenants and landlords in mind. We
            offer a wide range of tools and resources to simplify the rental
            process. From detailed property listings to easy-to-use search
            filters, our goal is to make your rental experience as smooth and
            efficient as possible.
          </Text>
          <View style={styles.mission}>
            <Text style={styles.missionHeader}>Our Mission</Text>
            <Text>
              To provide a user-friendly platform that makes it easy for tenants
              and landlords to connect, ensuring a seamless and hassle-free
              rental experience for everyone involved.
            </Text>
          </View>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.header}>Contact Us</Text>
          <Text style={styles.contactInfo}>
            Have questions? We’d love to hear from you! Feel free to reach out
            to us through the form below or via our contact details:
          </Text>
          <View style={styles.contactDetails}>
            <Text>
              <Text style={styles.bold}>Email:</Text> support@homefinder.com
            </Text>
            <Text>
              <Text style={styles.bold}>Phone:</Text> +1 (123) 456-7890
            </Text>
            <Text>
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
    backgroundColor: "#fff",
  },
  aboutContactContainer: {
    padding: 20,
  },
  aboutSection: {
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutParagraph: {
    fontSize: 16,
    marginBottom: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  mission: {
    marginTop: 20,
  },
  missionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contactSection: {
    marginTop: 30,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactDetails: {
    marginBottom: 20,
  },
  contactForm: {
    marginTop: 20,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    height: 100,
  },
});

export default AboutContact;
