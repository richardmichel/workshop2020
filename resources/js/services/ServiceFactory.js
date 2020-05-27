import MovieService from "@/services/movieService";

const services = {
	movie: MovieService,
};

export const ServiceFactory = {
	get: name => services[name]
};