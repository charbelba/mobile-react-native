import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Correct import

const SearchListing = ({ listings }) => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    bedrooms: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleInputChange = (value, name) => {
    setFilters({ ...filters, [name]: value });
  };

  // Function to filter listings based on the selected filters
  const filteredListings = listings.filter((listing) => {
    const isLocationMatch = filters.location
      ? listing.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const isPriceMatch = filters.price
      ? listing.price <= parseInt(filters.price)
      : true;
    const isBedroomsMatch = filters.bedrooms
      ? listing.bedrooms === parseInt(filters.bedrooms)
      : true;

    return isLocationMatch && isPriceMatch && isBedroomsMatch;
  });

  // Function to handle card click and show modal
  const handleCardClick = (listing) => {
    setSelectedListing(listing);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedListing(null);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={filters.location}
        onChangeText={(text) => handleInputChange(text, "location")}
      />

      {/* Price Dropdown (Picker with Border) */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={filters.price}
          onValueChange={(itemValue) => handleInputChange(itemValue, "price")}
        >
          <Picker.Item label="Max Price" value="" />
          <Picker.Item label="$500" value="500" />
          <Picker.Item label="$1000" value="1000" />
          <Picker.Item label="$1500" value="1500" />
          <Picker.Item label="$2000" value="2000" />
        </Picker>
      </View>

      {/* Bedrooms Dropdown (Picker with Border) */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={filters.bedrooms}
          onValueChange={(itemValue) =>
            handleInputChange(itemValue, "bedrooms")
          }
        >
          <Picker.Item label="Bedrooms" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>
      </View>

      {/* Render filtered listings */}
      <View style={styles.listings}>
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <TouchableOpacity
              key={listing.id}
              style={styles.card}
              onPress={() => handleCardClick(listing)}
            >
              <Image source={{ uri: listing.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.location}>{listing.location}</Text>
                <Text style={styles.price}>${listing.price}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No listings match your filters.</Text>
        )}
      </View>

      {/* Modal for showing property details */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedListing && (
              <>
                <Text style={styles.modalTitle}>{selectedListing.title}</Text>
                <Image
                  source={{ uri: selectedListing.image }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalText}>
                  Location: {selectedListing.location}
                </Text>
                <Text style={styles.modalText}>
                  Price: ${selectedListing.price}
                </Text>
                <Text style={styles.modalText}>
                  Bedrooms: {selectedListing.bedrooms}
                </Text>
                <Text style={styles.modalText}>Description:</Text>
                <Text style={styles.modalDescription}>
                  {selectedListing.description}
                </Text>
                <TouchableOpacity
                  onPress={closeModal}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 12,
    height: 50,
    borderRadius: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    borderRadius: 5,
  },
  listings: {
    marginTop: 20,
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e91e63",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchListing;
