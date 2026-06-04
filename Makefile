APPDIR := ../quickpdf
TARGET := quickpdf

build-app:
	cd $(APPDIR) && npm run build

publish: build-app
	rm -rf $(TARGET)
	mkdir -p $(TARGET)
	cp -a $(APPDIR)/dist/. $(TARGET)/
	quarto publish gh-pages
