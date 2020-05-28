<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

	    DB::table('movies')->insert([
			    [
				    'title' => "Bad Boys-3",
				    "description"=> "Los policías de la vieja escuela Mike Lowery y Marcus Burnett vuelven a patrullar juntos para derrotar al líder vicioso de un cartel de drogas de Miami.",
			        "url" => "/api/file/show-file/bad-boys-3.mp4",
				    "poster"=>  "/api/file/show-file/bad-boys-3.jpg",
				    "cat_movie_type_id"=> 1
			    ],
			    [
				    'title' => "Rápido y Furioso",
				    "description"=> null,
				    "url" => "/api/file/show-file/fast-and-furious.mp4",
				    "poster"=>  "/api/file/show-file/fast-and-furious.jpg",
				    "cat_movie_type_id"=> 1
			    ],
			    [
				    'title' => "Jurassic World 2",
				    "description"=> null,
				    "url" => "/api/file/show-file/jurassic-world-2.mp4",
				    "poster"=>  "/api/file/show-file/jurassic-world-2.jpg",
				    "cat_movie_type_id"=> 1
			    ],
			    [
				    'title' => "La Casa de Papel",
				    "description"=> null,
				    "url" => "/api/file/show-file/La-casa-de-papel.mp4",
				    "poster"=>  "/api/file/show-file/La-casa-de-papel.jpg",
				    "cat_movie_type_id"=> 2
			    ],
			    [
				    'title' => "Rescate",
				    "description"=> null,
				    "url" => "/api/file/show-file/rescate.mp4",
				    "poster"=>  "/api/file/show-file/rescate.jpg",
				    "cat_movie_type_id"=> 1
			    ],
			    [
				    'title' => "Sonic",
				    "description"=> null,
				    "url" => "/api/file/show-file/sonic.mp4",
				    "poster"=>  "/api/file/show-file/sonic.jpeg",
				    "cat_movie_type_id"=> 1
			    ]
		    ]
	    );
    }
}
