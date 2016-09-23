/**
 * 国家，时区设置
 **/
(function($, owner) {
	owner.country = function() {
		var result = new Array(
							'Angola',
					        'Afghanistan',
					        'Albania',
					        'Algeria',
					        'Andorra',
					        'Anguilla',
					        'Antigua and Barbuda',
					        'Argentina',
					        'Armenia',
					        'Ascension',
					        'Australia',
					        'Austria',
					        'Azerbaijan',
					        'Bahamas',
					        'Bahrain',
					        'Bangladesh',
					        'Barbados',
					        'Belarus',
					        'Belgium',
					        'Belize',
					        'Benin',
					        'Bermuda Is.',
					        'Bolivia',
					        'Botswana',
					        'Brazil',
					        'Brunei',
					        'Bulgaria',
					        'Burkina-faso',
					        'Burma',
					        'Burundi',
					        'Cameroon',
					        'Canada',
					        'Cayman Is.',
					        'Central African Republic',
					        'Chad',
					        'Chile',
					        'China',
					        'Colombia',
					        'Congo',
					        'Cook Is.',
					        'Costa Rica',
					        'Cuba',
					        'Cyprus',
					        'Czech Republic',
					        'Denmark',
					        'Djibouti',
					        'Dominica Rep.',
					        'Ecuador',
					        'Egypt',
					        'EI Salvador',
					        'Estonia',
					        'Ethiopia',
					        'Fiji',
					        'Finland',
					        'France',
					        'French Guiana',
					        'Gabon',
					        'Gambia',
					        'Georgia',
					        'Germany',
					        'Ghana',
					        'Gibraltar',
					        'Greece',
					        'Grenada',
					        'Guam',
					        'Guatemala',
					        'Guinea',
					        'Guyana',
					        'Haiti',
					        'Honduras',
					        'Hongkong',
					        'Hungary',
					        'Iceland',
					        'India',
					        'Indonesia',
					        'Iran',
					        'Iraq',
					        'Ireland',
					        'Israel',
					        'Italy',
					        'Ivory Coast',
					        'Jamaica',
					        'Japan',
					        'Jordan',
					        'Kampuchea (Cambodia )',
					        'Kazakstan',
					        'Kenya',
					        'Korea',
					        'Kuwait',
					        'Kyrgyzstan',
					        'Laos',
					        'Latvia',
					        'Lebanon',
					        'Lesotho',
					        'Liberia',
					        'Libya',
					        'Liechtenstein',
					        'Lithuania',
					        'Luxembourg',
					        'Macao',
					        'Madagascar',
					        'Malawi',
					        'Malaysia',
					        'Maldives',
					        'Mali',
					        'Malta',
					        'Mariana Is',
					        'Martinique',
					        'Mauritius',
					        'Mexico',
					        'Moldova',
					        'Monaco',
					        'Mongolia',
					        'Montserrat Is',
					        'Morocco',
					        'Mozambique',
					        'Namibia',
					        'Nauru',
					        'Nepal',
					        'Netheriands Antilles',
					        'Netherlands',
					        'New Zealand',
					        'Nicaragua',
					        'Niger',
					        'Nigeria',
					        'North Korea',
					        'Norway',
					        'Oman',
					        'Pakistan',
					        'Panama',
					        'Papua New Cuinea',
					        'Paraguay',
					        'Peru',
					        'Philippines',
					        'Poland',
					        'French Polynesia',
					        'Portugal',
					        'Puerto Rico',
					        'Qatar',
					        'Reunion',
					        'Romania',
					        'Russia',
					        'Saint Lueia',
					        'Saint Vincent',
					        'Samoa Eastern',
					        'Samoa Western',
					        'San Marino',
					        'Sao Tome and Principe',
					        'Saudi Arabia',
					        'Senegal',
					        'Seychelles',
					        'Sierra Leone',
					        'Singapore',
					        'Slovakia',
					        'Slovenia',
					        'Solomon Is',
					        'Somali',
					        'South Africa',
					        'Spain',
					        'Sri Lanka',
					        'St.Lucia',
					        'St.Vincent',
					        'Sudan',
					        'Suriname',
					        'Swaziland',
					        'Sweden',
					        'Switzerland',
					        'Syria',
					        'Taiwan',
					        'Tajikstan',
					        'Tanzania',
					        'Thailand',
					        'Togo',
					        'Tonga',
					        'Trinidad and Tobago',
					        'Tunisia',
					        'Turkey',
					        'Turkmenistan',
					        'Uganda',
					        'Ukraine',
					        'United Arab Emirates',
					        'United Kiongdom',
					        'United States of America',
					        'Uruguay',
					        'Uzbekistan',
					        'Venezuela',
					        'Vietnam',
					        'Yemen',
					        'Yugoslavia',
					        'Zimbabwe',
					        'Zaire',
					        'Zambia'
		);
		return result;
	};
	
	owner.time_zone = function() {
		var result = {
					"Marshall Islands"    :     	"+12:00",
				    "Midway Island"       :		"-11:00",
				    "Hawaii"			    :     	"-10:00",
				    "Alaska"				:		"-8:00",
				    "Pacific Time"   		: 		"-7:00",
				    "Tijuana"				:   	"-7:00",
				    "Arizona"				:		"-7:00",
				    "Chihuahua"			:		"-7:00",
				    "Mountain Time"		:		"-6:00",
				    "Central America"		:		"-6:00",
				    "Central Time"		:		"-5:00",
				    "Mexico City"			:		"-6:00",
				    "Saskatchewan"		:		"-6:00",
				    "Bogota"				:		"-5:00",
				    "Eastern Time"		:		"-4:00",
				    "Venezuela"			:		"-4:30",
				    "Atlantic Time (Barbados)" :	"-4:00",
				    "Atlantic Time (Canada)"	 :	"-3:00",
				    "Manaus"				:		"-4:00",
				    "Santiago"			:		"-3:00",
				    "Newfoundland"		:		"-2:30",
				    "Brasilia"			:		"-3:00",
				    "Buenos Aires"		:		"-3:00",
				    "Greenland"			:		"-3:00",
				    "Montevideo"			:		"-3:00",
				    "Mid-Atlantic"		:		"-2:00",
				    "Azores"				:		"-1:00",
				    "Cape Verde Islands"	:		"-1:00",
				    "Casablanca"			:		"+0:00",
				    "London, Dublin"		:		"+0:00",
				    "Amsterdam, Berlin"	:		"+1:00",
				    "Belgrade"			: 		"+1:00",
				    "Brussels"			:		"+1:00",
				    "Sarajevo"			:		"+1:00",
				    "Windhoek"			:		"+2:00",
				    "W. Africa Time"		:		"+1:00",
				    "Amman, Jordan"		:		"+2:00",
				    "Athens, Istanbul"	:		"+2:00",
				    "Beirut, Lebanon"		:		"+2:00",
				    "Cairo"				:		"+2:00",
				    "Helsinki"			:		"+2:00",
				    "Jerusalem"			:		"+2:00",
				    "Harare"				:		"+2:00",
				    "Paris"             :       "+2:00",
				    "Minsk"				:		"+3:00",
				    "Baghdad"				:		"+3:00",
				    "Moscow"				:		"+3:00",
				    "Kuwait"				:		"+3:00",
				    "Nairobi"				:		"+3:00",
				    "Tehran"				:		"+3:30",
				    "Baku"				:       "+4:00",
				    "Tbilisi"				:		"+4:00",
				    "Yerevan"				:		"+4:00",
				    "Dubai"				:		"+4:00",
				    "Kabul"				:		"+4:30",
				    "Islamabad, Karachi"	:		"+5:00",
				    "Ural'sk"				:		"+5:00",
				    "Yekaterinburg"		:		"+5:00",
				    "Kolkata"				:		"+5:30",
				    "Sri Lanka"			:		"+5:30",
				    "Kathmandu"			:		"+5:45",
				    "Astana"				:		"+6:00",
				    "Yangon"				:		"+6:30",
				    "Krasnoyarsk"			:		"+7:00",
				    "Bangkok"				:		"+7:00",
				    "Jakarta"				:		"+7:00",
				    "Beijing"				:		"+8:00",
				    "Hong Kong"			:		"+8:00",
				    "Irkutsk"				:		"+8:00",
				    "Kuala Lumpur"		:		"+8:00",
				    "Perth"				:		"+8:00",
				    "Taipei"				:		"+8:00",
				    "Seoul"				:		"+9:00",
				    "Tokyo, Osaka"		:		"+9:00",
				    "Yakutsk"				:		"+9:00",
				    "Adelaide"			:		"+10:30",
				    "Darwin"				:		"+9:30",
				    "Brisbane"			:		"+10:00",
				    "Hobart"				:		"+11:00",
				    "Sydney, Canberra"	:		"+11:00",
				    "Vladivostok"			:		"+10:00",
				    "Guam"				:		"+10:00",
				    "Magadan"				:		"+10:00",
				    "Auckland"			:		"+13:00",
				    "Fiji"				:		"+12:00",
				    "Tonga"				:		"+13:00"
		};
		return result;
	};

}(mui, window.poer_timezone = {}));