import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const PRICE_PER_CUP = 150;

export default function Receipt() {
    const { coffeeCount } = useLocalSearchParams();

    const cups = Number(coffeeCount);
    const totalBill = cups * PRICE_PER_CUP;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Receipt</Text>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.label}>Cups Ordered:</Text>
                    <Text style={styles.value}>{cups}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Price per Cup:</Text>
                    <Text style={styles.value}>₱{PRICE_PER_CUP}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                    <Text style={styles.totalLabel}>Total Bill:</Text>
                    <Text style={styles.totalValue}>₱{totalBill}</Text>
                </View>
            </View>
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
        fontSize: 24,
        fontWeight: "bold",
        color: "#4B2E2B",
        marginBottom: 30,
    },
    card: {
        backgroundColor: "#ede7e7",
        borderRadius: 16,
        padding: 24,
        width: "100%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    label: {
        fontSize: 16,
        color: "#555",
    },
    value: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4B2E2B",
    },
    totalValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2E7D32",
    },
});