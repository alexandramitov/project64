import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default class HomeScreen extends React.Component{
    getWord=(word)=>{
        var searchKeyword = word.toLowerCase();
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        //console.log(url);
        return fetch(url)
        .then((data)=>{
          if(data.status === 200)
          {
            return data.json()
          }
          else
          {
            return null
          }
        })
        .then((response) => {
          //console.log(response);
    
          var responseObject = response
          //var word = responseObject.word
          //var lexicalCategory = responseObject.results[0].lexicalEntries[0].lexicalCategory.text
          if(responseObject)
          {
            var wordData = responseObject.definitions[0]
            //console.log(responseObject.definitions[0])
            var definition = wordData.description
            var lexicalCategory = wordData.wordtype
            //console.log(lexicalCategory)
            this.setState({
              "word" : this.state.text,
              "definition" : definition,
              "lexicalCategory" : lexicalCategory
            })
          }
          else{
            this.setState({
              "word" : this.state.text,
              "definition" : "Not Found",
            })
          }
        })
      }

      render(){
          return(
              <View>

<View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          Word: {" "}
        </Text>
        <Text style={{ fontSize: 18 }}>
          {this.state.word}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsContainer}>
          Type: {" "}
        </Text>
        <Text style={{ fontSize: 18 }}>
          {this.state.lexicalCategory}
        </Text>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.detailsTitle}>
          Definition: {" "}
        </Text>
        <Text style={{ fontSize: 18 }}>
          {this.state.definition}
        </Text>
      </View>

        <Text> HomeScreen </Text>
      </View>
          )
      }
    
}

