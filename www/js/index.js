///////////////////////////////////////////////////////////////////////////////
//////////////////////                                 ////////////////////////
//////////////////////           INITIALIZATION        ////////////////////////
//////////////////////                                 ////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Track all Application Intervals
var intervals = {},

// Framework7
// - Initialize app and store it to myApp variable for futher access to its methods
	f7App = new Framework7(),
	
// Cordova
	app = {
		// Application Constructor
		initialize: function(){
			document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
			
		},

		onDeviceReady: function(){
			// deviceready Event Handler
			// - Bind any cordova events here. Common events are:
			//     'pause', 'resume', etc.
		}
	};

// Initalize Cordova Application
app.initialize();

f7App.sortableOpen();

$('.new-team').on('click', function () {
    /*f7App.prompt('Please enter the Team Number:', function (value) {
        $(`.list-block > ul`).append(`<li><div class='item-content'><div class='item-inner'><div class='item-title'>Team ` + value + `</div></div></div><div class='sortable-handler'></div></li>`)
    });*/
    
    f7App.modal({
    title:  'Please enter Team Number:',
    text: `<div class="list-block">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input"><input type="number" class="teamNumInput"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>`,
    buttons: [
      {
        text: 'CANCEL',
        onClick: function() {}
      },
      {
        text: 'OK',
        onClick: function() {
           $(`.list-block > ul`).append(`
                <li>
                    <div class='item-content'>
                        <div class='item-inner'><div class='item-title'>Team ` + $(".teamNumInput").val() + `</div></div>
                    </div>
                <div class='sortable-handler'></div>
            </li>`)
        }
      } 
    ]
  })
});
    
