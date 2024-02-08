import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView} from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';

export default function App() {
  // Los datos de la persona que se muestran en la tarjeta
  const person = [
    {
    id: 1,
    name: 'Joshua Garcia Gamino',
    age: 20,
    profession: 'Desarrollador web',
    phone: '4431833235',
    email: 'joshuagargam2003@gmail.com',
    website: 'www.joshuaGarGamPortafolio.com',
    photo: require('./src/img/personal.jpg'), 
    linkedin: 'https://www.linkedin.com/in/joshua-garcia-gami%C3%B1o-919829287/' ,
    github: 'https://github.com/JoshuaGarGam'
  },
{
  id: 2,
  name: 'Francisco Alejandro Garcia Torres',
    age: 20,
    profession: 'Desarrollador web',
    phone: '*********',
    email: 'alejandro@gmail.com',
    website: 'www.alejandro.com',
    photo: require('./src/img/perfil.jpeg'), 
    linkedin: 'https://www.linkedin.com/in/joshua-garcia-gami%C3%B1o-919829287/' ,
    github: 'https://github.com/JoshuaGarGam'
},
{
  id: 3,
  name: 'Marco',
    age: 28,
    profession: 'Helicoptero apache',
    phone: '4431833453425',
    email: 'marcocoño@gmail.com',
    website: 'www.marco.com',
    photo: require('./src/img/perfil.jpeg'), 
    linkedin: 'https://www.linkedin.com/in/joshua-garcia-gami%C3%B1o-919829287/' ,
    github: 'https://github.com/JoshuaGarGam'
},
{
  id: 4,
  name: 'El greñas',
    age: 190,
    profession: 'Heterosexual',
    phone: '*********',
    email: 'elgreñero@gmail.com',
    website: 'www.greñas.com',
    photo: require('./src/img/perfil.jpeg'), 
    linkedin: 'https://www.linkedin.com/in/joshua-garcia-gami%C3%B1o-919829287/' ,
    github: 'https://github.com/JoshuaGarGam'
},
{
  id: 5,
  name: 'Jose luis',
    age: 40,
    profession: 'El dormido',
    phone: '*********',
    email: 'dormidor3000@gmail.com',
    website: 'www.dormido.com',
    photo: require('./src/img/perfil.jpeg'), 
    linkedin: 'https://www.linkedin.com/in/joshua-garcia-gami%C3%B1o-919829287/' ,
    github: 'https://github.com/JoshuaGarGam'
}];

  
  const LinkedInBtn = (p) => {
    // Linking.openURL(p.linkedin); 
    p.linkedin ? Linking.openURL(p.linkedin) : alert('No hay enlace valido');
  };

  const githubBtn = (p) => {
    Linking.openURL(p.github);
  };

let tarjetas = person.map(p => {
  return (
    <View key={p.id} style={styles.container}>
      <View style={styles.card}>
        <Image source={p.photo} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>{p.name}</Text>
          <Text style={styles.age}>{p.age} años</Text>
          <Text style={styles.profession}>{p.profession}</Text>
          <View style={styles.contact}>
            <Text style={styles.phone}>{p.phone}</Text>
            <Text style={styles.email}>{p.email}</Text>
            <Text style={styles.website}>{p.website}</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <TouchableOpacity style={styles.linkedin} onPress={() => LinkedInBtn(p)}>
            <Image source={require('./src/img/linkedin.webp')} style={styles.logo} /> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.github} onPress={() => githubBtn(p)}>
            <Image source={require('./src/img/github.webp')} style={styles.logo} /> 
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

  return(
    <View style={styles.container}>
      <ScrollView>
        {tarjetas}
      </ScrollView>
    </View>
  )
};

// El objeto que define el estilo de los elementos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  card: {
    // width: 350,
    width: '85%',
    // height: 200,
    height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  photo: {
    // width: 100,
    width: '25%',
    // height: 100,
    height: '60%',
    borderRadius: 50,
    // borderRadius: '10%', // modificar por error
    margin: 20
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    // fontSize: RFPercentage(12), //poner el texto con porcentaje
    fontWeight: 'bold',
    color: '#333'
  },
  age: {
    fontSize: 16,
    color: '#666'
  },
  profession: {
    fontSize: 14,
    color: '#999'
  },
  contact: {
    flexDirection: 'col',
    marginTop: 10
  },
  phone: {
    fontSize: 12,
    color: '#333',
    marginRight: 10
  },
  email: {
    fontSize: 12,
    color: '#333',
    marginRight: 10
  },
  website: {
    fontSize: 12,
    color: '#333'
  },
  linkedin: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0077b5',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  github: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 20,
    height: 20,
    tintColor: '#ffffff'
  }
});