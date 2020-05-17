import React from 'react';
import {AsyncStorage} from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MemoryFlashcards:notifications';
const CHANNEL_ID = 'DailyReminder';

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

const createNotification = () => ({
  title: 'Memory Flashcards Reminder',
  body: "👋 Don't forget study!",
  ios: {
    sound: true
  },
  android: {
    channelId: CHANNEL_ID,
    sticky: false,
    color: 'red',
    sound: true,
    priority: "high",
    vibrate: true,
  }
});

const createChannel = () => ({
  name: 'Daily Reminder',
  description: 'This is a reminder for you to study your flashcards.',
  sound: true,
  priority: 'high'
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
          if (status === 'granted') {
            Notifications.createChannelAndroidAsync(CHANNEL_ID, createChannel())
              .then(channel => console.log('channel', channel))
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync();

                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(20);
                tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day'
                  }
                );

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              })
              .catch(err => {
                console.log('err', err);
              });
          }
        });
      }
    });
};