<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{
	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	use SoftDeletes;

	protected $table = 'movies';
}
