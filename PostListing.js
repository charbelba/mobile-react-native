import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker"; // Import Picker for dropdowns

const PostListing = ({ listings, setListings }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    bedrooms: "",
    image: null,
  });

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.location ||
      !formData.price ||
      !formData.bedrooms ||
      !formData.image
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newListing = {
      id: Date.now(),
      ...formData,
    };

    setListings([...listings, newListing]); // Add the new listing to the shared listings state
    alert("Listing Submitted!");
    setFormData({
      title: "",
      description: "",
      location: "",
      price: "",
      bedrooms: "",
      image: null,
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, image: result.assets[0].uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {}
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {formData.image ? (
          <Image source={{ uri: formData.image }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imagePlaceholder}>Select Image</Text>
        )}
      </TouchableOpacity>

      {}
      <TextInput
        style={styles.input}
        placeholder="Property Title"
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Property Description"
        value={formData.description}
        onChangeText={(text) => setFormData({ ...formData, description: text })}
        multiline
      />

      {/* Location Dropdown (Picker) */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formData.location}
          onValueChange={(itemValue) =>
            setFormData({ ...formData, location: itemValue })
          }
        >
          <Picker.Item label="Select Location" value="" />
          <Picker.Item label="New York" value="New York" />
          <Picker.Item label="Los Angeles" value="Los Angeles" />
          <Picker.Item label="San Francisco" value="San Francisco" />
          <Picker.Item label="Miami" value="Miami" />
        </Picker>
      </View>

      {/* Price Input */}
      <TextInput
        style={styles.input}
        placeholder="Price (in $)"
        keyboardType="numeric"
        value={formData.price}
        onChangeText={(text) => setFormData({ ...formData, price: text })}
      />

      {/* Bedrooms Dropdown (Picker) */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formData.bedrooms}
          onValueChange={(itemValue) =>
            setFormData({ ...formData, bedrooms: itemValue })
          }
        >
          <Picker.Item label="Select Number of Bedrooms" value="" />
          <Picker.Item label="1 Bedroom" value="1" />
          <Picker.Item label="2 Bedrooms" value="2" />
          <Picker.Item label="3 Bedrooms" value="3" />
          <Picker.Item label="4 Bedrooms" value="4" />
        </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Listing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imagePicker: {
    alignItems: "center",
    marginBottom: 20,
  },
  imagePreview: {
    width: 350,
    height: 120,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    lineHeight: 120,
    color: "#aaa",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PostListing;
