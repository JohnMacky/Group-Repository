import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 1 }]}>
        <Image
          source={require('./assets/University_of_Mindanao_Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>UMTC Login</Text>
      </View>

      <View style={[styles.section, { flex: 3 }]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.botsection, { flex: 1 }]}>
        <TouchableOpacity>
          <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F7F7FA',
  },
  section: {
    justifyContent: 'center',
    padding: 10,
  },
  logo:{
    width: 150,
    height: 150,
    marginTop: 200,
    alignSelf: 'center',
  },
  title: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F2937',
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    fontSize: 15,
    color: '#111827',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 6,
    shadowColor: '#4F46E5',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  botsection: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
});