APPDIR := ../quickpdf
TARGET := quickpdf

build-app:
	cd $(APPDIR) && mamba run -p ~/mamba/envs/svelte-dev/ npm run build

publish: build-app
	rm -rf $(TARGET)
	mkdir -p $(TARGET)
	cp -a $(APPDIR)/dist/. $(TARGET)/
	echo y | quarto publish gh-pages
