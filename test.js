'use strict';

var vows = require('perjury'),
    assert = vows.assert;

vows.describe('roberts-rules module').addBatch({
	'When we require the module': {
		topic: function() {
			return require('./index');
		},
		'it works': function(err, robertsRules) {
			assert.ifError(err);
			assert.isFunction(robertsRules);
		},
		'and we create a new meeting instance': {
			topic: function(robertsRules) {
				return robertsRules();
			},
		 	'it works': function(err, meeting) {
				assert.ifError(err);
				assert.isObject(meeting);
			},
			'it has the properties we expect': function(err, meeting) {
				// TODO tighten
				assert.isNull(meeting.speaker);
				assert.isArray(meeting.speakerList);
				assert.isArray(meeting.attendeeList);
			},
			'it has the methods we expect': function(err, meeting) {
				assert.isFunction(meeting.addAttendee);
				assert.isFunction(meeting.removeAttendee);
				
				assert.isFunction(meeting.queueSpeaker);
				assert.isFunction(meeting.dequeueSpeaker);
				assert.isFunction(meeting.ackSpeaker);
				assert.isFunction(meeting.yieldSpeaker);
				
				assert.isFunction(meeting.motionToClose);
				assert.isFunction(meeting.motionToTimebox);
				assert.isFunction(meeting.motionToAdjourn);
				assert.isFunction(meeting.secondMotion);
				
				assert.isFunction(meeting.pointOfOrder);
				assert.isFunction(meeting.pointOfClarification);

				assert.isFunction(meeting.castYea);
				assert.isFunction(meeting.castNay);
				assert.isFunction(meeting.castAbstain);
			},
			'and we mark Alice and Bob as present': {
				topic: function(meeting) {
					meeting.addAttendee('Alice');
					meeting.addAttendee('Bob');
					return meeting;
				},
				'it works': function(err, meeting) {
					assert.ifError(err);
					assert.isObject(meeting);
				},
				'Alice and Bob are in the attendee list': function(err, meeting) {
					assert.equal(meeting.attendeeList.length, 2);
					assert.includes(meeting.attendeeList, 'Alice');
					assert.includes(meeting.attendeeList, 'Bob');
				}
			}
		}
	}
}).export(module);
