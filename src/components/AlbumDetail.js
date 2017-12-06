import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

class AlbumDetail extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Card>
        <CardItem>
          <View style={styles.imageContain}>
            <Image style={styles.imageStyle} source={{ uri: this.props.album.thumbnail_image }} />
          </View>
          <View style={styles.headerContain}>
            <Text style={styles.headerTextStyle}>Album: {this.props.album.title}</Text>
            <Text>Artist: {this.props.album.artist}</Text>
          </View>
        </CardItem>
        <CardItem>
          <Image style={styles.mainImage} source={{ uri: this.props.album.image }} />
        </CardItem>
        <CardItem>
          <Button onpress={() => Linking.openURL(this.props.album.url)} >
            Buy now!
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContain: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  imageContain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  mainImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
