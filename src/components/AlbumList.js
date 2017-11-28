import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	constructor() {
		super();
		this.state = {
			fetchReturn: null,
		};
	}

	componentWillMount() {
		axios({
			method: 'get',
			url: 'https://rallycoding.herokuapp.com/api/music_albums',
		}).then(rez => {
			this.setState({
				fetchReturn: rez.data,
			});
			console.log(this.state.fetchReturn);
		}).catch(err => {
			console.log(err);
		});
	}

	renderAlbums() {
		return this.state.fetchReturn.map((album) => {
			return (
				<AlbumDetail album={album} />
			);
		});
	}

	render() {
		return (
				<View>
					{this.state.fetchReturn ? this.renderAlbums() : <View />}
				</View>
		);
	}   
}

export default AlbumList;
