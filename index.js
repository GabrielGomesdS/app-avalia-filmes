import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Componente de tela para exibir a lista de filmes
const MovieListScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.exemplo.com/filmes') // Substitua pela URL da sua API
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        onPress={() => navigation.navigate('MovieDetails', { movie: item })}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

// Componente de tela para exibir os detalhes de um filme
const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{movie.title}</Text>
      <Text>Rating: {movie.rating}</Text>
      <Text>Description: {movie.description}</Text>
    </View>
  );
};

// Criar o navegador de tabs
const Tab = createBottomTabNavigator();

// Componente principal com a navegação
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={MovieListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
