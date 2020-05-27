<template>
	<div>
		<b-navbar toggleable="lg"
		          type="dark"
		          variant="dark"
		          class="nav-black"
		          fixed="top">

			<div class="container">
				<b-navbar-brand to="/">
					<b-img src="/assets/img/movie.png" class="d-inline-block align-top"
					       style="max-width: 30px;"
					       fluid alt="Movie">
					</b-img>

					{{ titleApp }}
				</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item to="/" class="cursor-select">
							Inicio
						</b-nav-item>
						<b-nav-item to="/" class="cursor-select">
							Programas
						</b-nav-item>
						<b-nav-item to="/" class="cursor-select">
							Peliculas
						</b-nav-item>
						<b-nav-item to="/recientes" class="cursor-select">
							Recientes
						</b-nav-item>

					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-form>
							<b-nav-item to="/"><i class="far fa-user"></i> Usuario
							</b-nav-item>
						</b-nav-form>
					</b-navbar-nav>

				</b-collapse>
			</div>
		</b-navbar>

	</div>
</template>

<script>
	export default {
		name: "MyNavBar"
	}
</script>

<style scoped>

</style>
