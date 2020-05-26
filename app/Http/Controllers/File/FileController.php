<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{


	function showFile(Request $request, $fileNameHash)
	{
		try {

			if (Storage::disk('local')->exists('movies/' . $fileNameHash)) {

				$pathToFile = storage_path() . "/app/movies/" . $fileNameHash;
				
				return response()->download(
					$pathToFile,
					$fileNameHash,
					[],
					'inline'
				);

			} else {
				dd("Existió un error al abrir el archivo");
			}

		} catch (\Exception $e) {
			dd("Existió un error al abrir el archivo.");
		}

	}
}