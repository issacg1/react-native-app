import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

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
          <Text>{this.props.album.title}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default AlbumDetail;
