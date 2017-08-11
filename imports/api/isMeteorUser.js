import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

export default () => {
  return new Promise((resolve, reject) => {
    Tracker.autorun((c) => {
      Meteor.user() !== undefined && c.stop()
      Meteor.user() === null      && resolve(false)
      Meteor.user()               && resolve(true)
    })
  })
}