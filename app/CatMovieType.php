<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatMovieType extends Model
{
	protected $table = 'cat_movie_types';

	public function movies()
	{
		return $this->hasMany(Movie::class, 'cat_movie_type_id', 'id');
	}
}
