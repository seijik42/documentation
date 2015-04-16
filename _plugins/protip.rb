require 'kramdown'

# Takes two properties i.e. {% protip title='Check out this Protip!' icon='fa-coffee' %}

module Jekyll
  class ProtipTag < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
      @params = text
    end

    def render(context)
      data = {}

      @params.scan(/(\w+)='([^'\\]+(\\.[^'\\]+)*)'/).each { |m|
        data[m[0]] = Liquid::Template.parse(m[1]).render!(context)
      }

      icon = if data['icon'] then '<i class="fa ' + data['icon'] + '"></i> ' else '<i class="fa fa-bookmark-o"></i> ' end
      title = if data['title'] then '<h4 class="protip__title"> ' + icon + ' ' + data['title'] + '</h4>' end
      contents = Kramdown::Document.new(super).to_html
      '<blockquote class="protip">' + title + contents + '</blockquote>'
    end
  end
end

Liquid::Template.register_tag('protip', Jekyll::ProtipTag)