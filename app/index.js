import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    const [coffeeCount, setCoffeeCount] = useState(1);

    const addCup = () => {
        setCoffeeCount(coffeeCount + 1);
    };

    const removeCup = () => {
        if (coffeeCount > 1) {
            setCoffeeCount(coffeeCount - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coffee Shop</Text>

            <View style={styles.card}>
                <Text style={styles.countText}>Cups of Coffee: {coffeeCount}</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonAdd} onPress={addCup}>
                        <Text style={styles.buttonText}>+ Add Cup</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDelete} onPress={removeCup}>
                        <Text style={styles.buttonText}>- Remove Cup</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <Link
                href={{
                    pathname: "/receipt",
                    params: { coffeeCount: coffeeCount },
                }}
                asChild
            >
                <TouchableOpacity style={styles.viewReceiptButton}>
                    <Text style={styles.viewReceiptText}>View Receipt ⇀</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c2bdae",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#4B2E2B",
        marginBottom: 30,
    },
    card: {
        backgroundColor: "#ede7e7",
        borderRadius: 16,
        padding: 24,
        width: "100%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
        marginBottom: 30,
    },
    countText: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20,
        color: "#333",
    },
    buttonRow: {
        flexDirection: "row",
        gap: 12,
    },
    buttonAdd: {
        backgroundColor: "#5fb753",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 6,
    },
    buttonDelete: {
        backgroundColor: "#b14a5d",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 6,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
    viewReceiptButton: {
        backgroundColor: "#2E7D32",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    viewReceiptText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});