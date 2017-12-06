import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
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
		return this.state.fetchReturn.map((album, i) => {
			return (
				<AlbumDetail album={album} key={i} />
			);
		});
	}

	render() {
		return (
				<ScrollView>
					{this.state.fetchReturn ? this.renderAlbums() : <View />}
				</ScrollView>
		);
	}   
}

export default AlbumList;
