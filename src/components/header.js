import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
	return (
			<View style={styles.view}>
					<Text style={styles.blue}>{props.header}</Text>
			</View>
		);
	};

const styles = StyleSheet.create({
    blue: {
        color: 'blue',
				textAlign: 'center',
				fontSize: 40,
		},
		view: {
			marginTop: 20,
			height: 50,
			backgroundColor: '#f8f8f8',
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			elevation: 2,
			position: 'relative',
		}
});


export default Header;
