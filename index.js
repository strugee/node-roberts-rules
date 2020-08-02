module.exports = function robertsRulesFactory() {
	return {
		/*
		 ********************
		 *
		 * MEETING PROPERTIES
		 *
		 ********************
		 */
		speaker: null,
		speakerList: [],
		attendeeList: [],

		/*
		 *****************
		 *
		 * MEETING METHODS
		 *
		 *****************
		 */

		// Attendance
		addAttendee(member) {
			var l = this.attendeeList;

			if (l.indexOf(member) === -1) {
				this.attendeeList.push(member);
			}
		},
		removeAttendee(member) {
			var l = this.attendeeList,
			    idx = l.indexOf(member);

			if (idx > -1) {
				l.splice(idx, 1);
			}
		},

		// Speaker list
		queueSpeaker() {},
		dequeueSpeaker() {},
		ackSpeaker() {},
		yieldSpeaker() {},

		// Motions
		motionToClose() {},
		motionToTimebox() {},
		motionToAdjourn() {},
		secondMotion() {},

		// Points
		pointOfOrder() {},
		pointOfClarification() {},

		// Voting
		castYea(voter) {},
		castNay(voter) {},
		castAbstain(voter) {}
	};
};
