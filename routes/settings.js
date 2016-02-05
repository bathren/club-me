/*
 * GET settings god damn it
*/

exports.view = function(req, res){
  res.render('settings', {
    'settings': [
    { 'name': 'Email Notifications',
      'image': 'Checked.png',
      'id': 'setting1'
    },
    { 'name': 'Dark Mode',
      'image': 'Checked.png',
      'id': 'setting2'
    },
    { 'name': 'Notify Clubs When I Bookmark Them',
      'image': 'Checked.png',
      'id': 'setting3'
    },
    ]
  });
}