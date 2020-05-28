<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CatMovieTypeSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('cat_movie_types')->insert([
				[
					'title' => 'Películas de Acción',
				],
				[
					'title' => 'Series',
				]
			]
		);
	}
}
