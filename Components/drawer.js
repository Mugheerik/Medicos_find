import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Cardiology from './cardiology';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

 function DrawerContent(props) {
const Navigation=props.navigation;

  
  
  return (
    <DrawerContentScrollView >
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>Dawid Urbaniak</Title>
          <Caption style={styles.caption}>@trensik</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>

          <DrawerItem
            icon={({ color, size }) => (
                <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
                />
                )}
                label="Profile"
                onPress={()=>Navigation.navigate('Doctors',{name:'Nephrologist'})}
                />
          <DrawerItem
                label="Pediatrician"
                onPress={()=>Navigation.navigate('Doctors',{name:'Pediatrician'})}
                />
        </Drawer.Section>
       
        
          
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop:100,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;