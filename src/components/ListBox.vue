<template>
  <div>
    <div class="w-82">
			<div class="text-center m-5 bg-blue-400 text-white font-semibold rounded-md p-2">
				<h3>{{date}}</h3>
			</div>
			<div class="bg-gray-200 shadow-2xl mb-10">
				<div class="flex items-center justify-center">
					<img class="w-40 h-40" :src="'http://openweathermap.org/img/wn/'+weather.icon+'@2x.png'">
				</div>
				<table class="mb-4 text-sm tbl-weather w-full">
					<tr>
						<td>
							<span class="font-semibold">Temp Min:</span> 
							{{temp_min}}
						</td>
						<td>
							<span class="font-semibold">Temp Max:</span> 
							{{temp_max}}
						</td>
					</tr>
					<tr>
						<td>
							<span class="font-semibold">Feels Like:</span> 
							{{feels_like}}
						</td>
						<td>
							<span class="font-semibold">Pressure:</span> 
							{{pressure}}
						</td>
					</tr>
					<tr>
						<td>
							<span class="font-semibold">Sea Level:</span> 
							{{sea_level}}
						</td>
						<td>
							<span class="font-semibold">Ground Level:</span> 
							{{grnd_level}}
						</td>
					</tr>
					<tr>
						<td>
							<span class="font-semibold">Humidity:</span> 
							{{humidity}}
						</td>
						<td>
							<span class="font-semibold">Clouds:</span> 
							{{clouds}}
						</td>
					</tr>
					<tr>
						<td>
							<span class="font-semibold">Wind Speed:</span> 
							{{wind.speed}}
						</td>
						<td>
							<span class="font-semibold">Wind Direction:</span> 
							{{wind.deg}}
						</td>
					</tr>
					<tr>
						<td class="text-center" colspan="2">
							<span class="font-semibold">Clouds Description:</span> 
							{{weather.description}}
						</td>
					</tr>
				</table>
				<hr class="mx-6 border-black"/>
				<div class="mx-2 text-center">
					<h1 class="text-5xl font-semibold p-10">{{temp}}</h1>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'ListBox',
	props: [
		'clouds',
		'date',
		'day',
		'dt_txt',
		'feels_like',
		'grnd_level',
		'humidity',
		'pressure',
		'sea_level',
		'temp',
		'temp_kf',
		'temp_max',
		'temp_min',
		'weather',
		'wind'
	]
}

</script>
