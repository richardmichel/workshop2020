<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('movies', function (Blueprint $table) {
			$table->id();
			$table->string('title');
			$table->text('description')->nullable();
			$table->string('url');
			$table->string('poster');
			$table->unsignedBigInteger('cat_movie_type_id');
			$table->timestamps();
			$table->softDeletes();

			$table->foreign('cat_movie_type_id')
				->references('id')
				->on('cat_movie_types');


		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('movies');
	}
}
