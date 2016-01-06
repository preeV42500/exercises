class Octal
  attr_reader :value

  def initialize(num_str)
    @value = num_str
  end

  def to_decimal
    return 0 if @value =~ /([^'0-7])/
    val = @value.split('').map(&:to_i)
    base_eight_nums = val.reverse.map.with_index { |num, i| (8**i)*num }
    base_eight_nums.inject(&:+)
  end
end
